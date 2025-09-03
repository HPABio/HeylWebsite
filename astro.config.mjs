// astro.config.mjs
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import compress from "vite-plugin-compression";
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
  integrations: [react(), tailwind()],
  vite: {
    plugins: [

    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.7, 0.9] },
      svgo: {},
      webp: { quality: 85 }, // 👈 Converts PNG/JPG → WebP
    }),//     // Brotli (preferred)
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
