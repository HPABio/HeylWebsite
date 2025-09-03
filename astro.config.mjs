// astro.config.mjs
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import compress from "vite-plugin-compression";

export default defineConfig({
  integrations: [react(), tailwind()],
  vite: {
    plugins: [
      // Brotli (preferred)
      compress({
        algorithm: "brotliCompress",
        ext: ".br",
        threshold: 10240,
        deleteOriginFile: false,
        compressionOptions: { level: 11 }
      }),
      // Gzip (fallback)
      compress({
        algorithm: "gzip",
        ext: ".gz",
        threshold: 10240,
        deleteOriginFile: false
      })
    ]
  }
});
