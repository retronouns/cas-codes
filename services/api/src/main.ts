import Fastify from "fastify";
import cors from "@fastify/cors";
import { pg } from "./pg.ts";
import { PG_CONNECTION_STRING } from "./env.ts";

const fastify = Fastify();
await fastify.register(pg, { connectionString: PG_CONNECTION_STRING ?? "" });
await fastify.register(cors, {
    origin: "*",
});

fastify.get("/visitors", async () => {
    try {
        await fastify.pg.queryArray(
            "INSERT INTO visits(created_at) VALUES(NOW());",
        );
        const select = await fastify.pg.queryObject(
            "SELECT COUNT(*) as qty FROM visits",
        );
        const data = select.rows as { qty: bigint }[];
        return { count: Number(data[0].qty) };
    } catch (error) {
        console.error(error);
    }
});

await fastify.listen({ port: 8000 });
