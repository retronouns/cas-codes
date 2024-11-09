// @ts-nocheck error doesn't matter here for some reason?

import { defineConfig } from "vite";
import deno from "@deno/vite-plugin";
import react from "@vitejs/plugin-react";
import { resolve } from "jsr:@std/path";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~": resolve(__dirname, "./src/"),
    },
  },
  plugins: [deno(), react()],
});
