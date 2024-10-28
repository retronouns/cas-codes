import "jsr:@std/dotenv/load";

export const PG_CONNECTION_STRING = Deno.env.get("PG_CONNECTION_STRING");
