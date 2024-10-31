# cas.codes Frontend

[Back to root README](/README.md)

This is the frontend to my portfolio site. It is built using Deno 2, Vite, React, and TailwindCSS.

## Running the dev app:

The following steps assume you have a terminal navigated to the `<project root>/apps/cas-codes/` directory and that you have [Deno 2](https://deno.com/) installed.

1. Run the API server in another terminal. See [the api readme](/services/api/README.md) for more information.
1. Run `cp .env.example .env` to make an env file
1. In the created `.env` file, replace the value for `VITE_API_HOST` with the URL for running API (it is probably already correct)
1. Run `deno task dev`
