import type { FastifyPluginAsync } from "fastify";
import { Client } from "deno-postgres";
import fp from "fastify-plugin";

const pgPlugin: FastifyPluginAsync<{ connectionString: string }> = async (
    fastify,
    { connectionString },
) => {
    const client = new Client(connectionString);
    await client.connect();
    fastify.decorate("pg", client);
};

export const pg = fp(pgPlugin);
export default pg;

declare module "fastify" {
    interface FastifyInstance {
        pg: Client;
    }
}
