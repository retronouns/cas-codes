import { PG_CONNECTION_STRING } from "./../src/env.ts";
import { Client } from "deno-postgres";

const getMigrations = async () => {
    const sqlFiles: string[] = [];

    for await (const dirEntry of Deno.readDir("./migrations")) {
        if (dirEntry.isFile) {
            sqlFiles.push(dirEntry.name);
        }
    }
    sqlFiles.sort();

    return await Promise.all(sqlFiles.map(
        (filename) => {
            return (async () => ({
                filename,
                sql: await Deno.readTextFile(`./migrations/${filename}`),
            }))();
        },
    ));
};

const migrate = async () => {
    const migrations = await getMigrations();

    const client = new Client(PG_CONNECTION_STRING);
    await client.connect();

    await client.queryObject(
        "CREATE TABLE IF NOT EXISTS migrations (filename TEXT, migrated_at TIMESTAMPTZ)",
    );

    const migrationRecords = (await client.queryObject(
        "SELECT filename, migrated_at FROM migrations",
    )).rows as { filename: string; migrated_at: string }[];

    const migratedFilenames = migrationRecords.map((mr) => mr.filename);
    const unmigrated = migrations.filter((migration) =>
        migratedFilenames.indexOf(migration.filename) === -1
    );

    for (const migration of unmigrated) {
        console.info(`Migrating ${migration.filename}...`);
        console.info(migration.sql);
        const transaction = client.createTransaction(migration.filename);
        await transaction.begin();
        try {
            await transaction.queryArray(migration.sql);
            await transaction.queryArray(
                `INSERT INTO migrations (filename, migrated_at) VALUES($1, NOW())`,
                [migration.filename],
            );
            await transaction.commit();
        } catch (error) {
            // await transaction.rollback();
            throw error;
        }
    }

    await client.end();
};

await migrate();
