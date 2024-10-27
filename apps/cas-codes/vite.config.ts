// @ts-nocheck error doesn't matter here for some reason?

import { defineConfig } from "vite";
import deno from "@deno/vite-plugin";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [deno(), react()],
});
