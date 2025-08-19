// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import path from "path";
import { fileURLToPath } from "url";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  vite: {
    resolve: {
      /* alias: {
        "@": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "src"),
      }, */
    },
  },
});
