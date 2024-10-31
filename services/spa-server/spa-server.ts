/**
 * This is just for deno deploy to serve the React app's build artifacts.
 * Since this is a SPA, the only actual valid route is "/", which maps to `index.html`.
 * This redirects requests to routes other than "/" to `index.html` as well so React can properly handle them.
 *
 * taken from an example workaround given in https://github.com/denoland/std/issues/3420
 */

import { serveDir } from "https://deno.land/std@0.224.0/http/file_server.ts";

Deno.serve(async (req) => {
    let res = await serveDir(req);
    if (res.status == 404) {
        const index = new URL(req.url);
        index.pathname = "index.html";
        res = await serveDir(new Request(index, req));
    }
    return res;
});
