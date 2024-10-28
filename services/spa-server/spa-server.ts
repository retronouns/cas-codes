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
