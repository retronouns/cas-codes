import Fastify from "fastify";
import cors from "@fastify/cors";
import { pg } from "./pg.ts";
import { PG_CONNECTION_STRING } from "./env.ts";

const fastify = Fastify();
await fastify.register(pg, { connectionString: PG_CONNECTION_STRING ?? "" });
await fastify.register(cors, {
    origin: "*",
});

fastify.get("/", async (req, res) => {
    res.send({ message: "Hello world!" });
});

await fastify.listen({ port: 8000 });
