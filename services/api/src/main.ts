import Fastify from "fastify";
import cors from "@fastify/cors";
import { pg } from "~/pg.ts";
import { PG_CONNECTION_STRING } from "~/env.ts";

const fastify = Fastify();
await fastify.register(pg, { connectionString: PG_CONNECTION_STRING ?? "" });
await fastify.register(cors, {
    origin: "*",
});

let visitors: null | number = null;

fastify.get("/visitors", async () => {
    try {
        if (visitors === null) {
            const select = await fastify.pg.queryObject(
                "SELECT COUNT(*) as qty FROM visits",
            );
            const data = select.rows as { qty: bigint }[];
            visitors = Number(data[0].qty);
        }

        await fastify.pg.queryArray(
            "INSERT INTO visits(created_at) VALUES(NOW());",
        );

        return { count: ++visitors };
    } catch (error) {
        console.error(error);
    }
});

await fastify.listen({ port: 8000 });
