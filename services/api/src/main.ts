import Fastify from "fastify";
import cors from "@fastify/cors";

const fastify = Fastify();
await fastify.register(cors, {
    origin: "*",
});

fastify.get("/", async (req, res) => {
    res.send({ message: "Hello world!" });
});

await fastify.listen({ port: 8000 });
