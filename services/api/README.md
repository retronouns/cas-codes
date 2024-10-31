# cas.codes API

[Back to root README](/README.md)

This is the API for my portfolio site. It is built using Deno, Fastify, and PostgreSQL.

## Running the API server

The following steps assume you have a terminal navigated to the `<project root>/services/api/` directory, that you have [Deno 2](https://deno.com/) installed, and you have an instance of PostgreSQL running somewhere.

1. Run `cp .env.example .env` to make an env file
1. In the created `.env` file, replace the value for `PG_CONNECTION_STRING` with the connection string for your PostgreSQL instance.
1. Run `deno task dev`
