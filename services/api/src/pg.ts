import type { FastifyPluginAsync } from "fastify";
import { Client } from "deno-postgres";
import fp from "fastify-plugin";

const pgFunc: FastifyPluginAsync<{ connectionString: string }> = async (
    fastify,
    { connectionString },
) => {
    const client = new Client(connectionString);
    await client.connect();
    fastify.decorate("pg", client);
};

export const pg = fp(pgFunc);
export default pg;

declare module "npm:fastify@^5.0.0" {
    interface FastifyInstance {
        pg: Client;
    }
}
