# Weinerlebnistouren-Heyl — Deployment Notes

_Last updated: 2025-09-03_

## TL;DR

- **Root cause of first build failure:** Astro image pipeline tried to run without **Sharp** → `MissingSharp`.
- **Nginx boot loop:** syntax error (`unexpected "}"` in `default.conf`), and a **deprecated** `listen ... http2` usage (warning only).
- **Architecture decision:** **Traefik terminates TLS** (Let’s Encrypt). Backend **nginx serves HTTP only** on port 80 (no certs inside nginx).
- **Performance issue:** very **large PNGs** (0.5–2.6 MB) and lack of long-term caching for hashed assets.
- **Build-time win:** added **vite-plugin-compression** → `.br`/`.gz` for JS/CSS.
- **New blocker:** Astro failed with `NoMatchingRenderer` for `.tsx` → missing **@astrojs/react** integration.

---

## Timeline & Milestones (UTC)

- **03:53** — Nixpacks detects Node app (Node 22, pnpm).
  - **Build fails:** `MissingSharp: Could not find Sharp.` during “generating optimized images” (Astro).
- **~03:04–03:05** — Nginx container loops on start:
  - **Fatal:** `unexpected "}"` in `/etc/nginx/conf.d/default.conf:5`.
  - **Warn:** `listen ... http2` deprecated → should use `listen 443 ssl;` and a separate `http2;` line (if nginx handled TLS).
- **Decision:** TLS termination stays in **Traefik**. Backend **nginx HTTP only** on :80; remove host port 443 from backend.
- **After fix:** Site reachable but **slow**. Logs show huge PNGs (≈800 KB–2.6 MB) and JS bundles.
- **Action:** enable compression + caching, and pre-compress at build:
  - `pnpm add -D vite-plugin-compression` → **SUCCESS**: `.br`/`.gz` created for pages and chunks.
- **Next build error:** `NoMatchingRenderer` for `.tsx` (`InteractiveTours`) → missing **@astrojs/react** integration.

---

## What We Tried

1. **Fix Astro image build failure**
   - ✅ _Recommended:_ install `sharp` (and if needed system **libvips** in Nixpacks).
   - ➕ _Alternative:_ switch Astro to **passthrough image service** (skip Sharp entirely).
2. **Fix nginx startup**
   - ✅ Remove syntax error (`}` at line 5).
   - ✅ Clarify TLS responsibilities: **Traefik** ↔ **nginx HTTP**.
3. **Speed up delivery**
   - ✅ **Pre-compress** assets at build (`.br`/`.gz`) via Vite plugin.
   - ✅ Plan **long-cache** headers for hashed assets (`/_astro/…`).
   - ➡️ To-do: convert big PNGs → **WebP/AVIF** (via Sharp/Astro Image or batch conversion).
4. **Resolve `NoMatchingRenderer`**
   - ➡️ To-do: add **@astrojs/react** and register in `astro.config.mjs`; ensure proper hydration directives.

---

## What Worked

- **vite-plugin-compression** produced `.br`/`.gz` for JS/CSS (confirmed in build logs).
- Clarified **proxy/ports architecture**: only Traefik binds host `:80/:443`; backend stays on internal `:80`.
- Clear path for **caching & compression** and for **Sharp/libvips** in Nixpacks.

## What Failed / Blocked

- Astro build: **Sharp missing** → build stopped.
- nginx: **syntax error** in `default.conf` prevented startup.
- Runtime perf: large **PNG payloads** and missing `Cache-Control` on hashed assets.
- Build: `NoMatchingRenderer` for `.tsx` (missing **@astrojs/react**).

---

## Next Steps (Action List)

1. **Install Astro React integration**:
   - `pnpm add -D @astrojs/react`
   - Add `react()` to `integrations` in `astro.config.mjs`. Rebuild.
2. **Choose image strategy** (recommended = optimize):
   - `pnpm add sharp` and add `vips` to Nixpacks `nixLibs` if build needs it.
   - Migrate images to **Astro/Image** (responsive `srcset`, WebP output) or batch-convert PNG→WebP.
3. **Serve pre-compressed + long cache**:
   - Add nginx rules to **prefer `.br`/`.gz`** and set **immutable** caching for `/_astro/`.
   - (Option) Traefik `compress` middleware for dynamic gzip.
4. **Verify**:
   - `curl -I -H "Accept-Encoding: br" https://…/_astro/…js` → expect `Content-Encoding: br` and long `Cache-Control`.
   - Lighthouse for LCP/TTFB & asset hints.

---

## Essential Snippets & Tips

### 1) **astro.config.mjs** — React + pre-compression

```js
// astro.config.mjs
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import compress from "vite-plugin-compression";

export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [
      // Brotli
      compress({
        algorithm: "brotliCompress",
        ext: ".br",
        threshold: 10240,
        deleteOrigin: false,
        compressionOptions: { level: 11 },
      }),
      // Gzip
      compress({
        algorithm: "gzip",
        ext: ".gz",
        threshold: 10240,
        deleteOrigin: false,
      }),
    ],
  },
});
```
