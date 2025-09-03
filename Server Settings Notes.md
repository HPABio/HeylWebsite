Server Settings Notes:

1. Add a "output" block to your Vite config:

```js
export default {
  // ...
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
};
```

2. Nixpacks — add libvips if Sharp needs it
   // In your Nixpacks plan "setup" block
   "nixLibs": [
   "gcc-unwrapped",
   "libuuid",
   "libGL",
   "vips"
   ]

3. nginx — HTTP-only behind Traefik, long caching for hashed assets
   server {
   listen 80;
   server_name weinerlebnistouren-heyl.de;
   root /usr/share/nginx/html;

# Hashed static assets → cache hard for a year

location ~\* ^/\_astro/ {
try_files $uri =404;
access_log off;
expires 365d;
add_header Cache-Control "public, max-age=31536000, immutable";
add_header Vary Accept-Encoding;
}

# Fallback

location / {
try_files $uri $uri/ =404;
}
}

4. nginx — prefer precompressed .br/.gz if present

# place at http{} level

map $http_accept_encoding $preferred_enc {
default "";
"~br" "br";
"~gzip" "gzip";
}

# inside server{}

location ~\* \.(js|css|html|svg|json|txt|map)$ {
add_header Vary Accept-Encoding;
if ($preferred_enc = br) {
    try_files $uri.br $uri.gz $uri =404;
    add_header Content-Encoding br;
  }
  if ($preferred_enc = gzip) {
try_files $uri.gz $uri =404;
add_header Content-Encoding gzip;
}
try_files $uri =404;
}

5. Traefik (labels) — enable gzip at the edge (optional)
   labels:

- "traefik.enable=true"
- "traefik.http.routers.site.rule=Host(`weinerlebnistouren-heyl.de`)"
- "traefik.http.routers.site.entrypoints=websecure"
- "traefik.http.routers.site.tls=true"
- "traefik.http.services.site.loadbalancer.server.port=80"

# Compression middleware

- "traefik.http.middlewares.compress.compress=true"
- "traefik.http.routers.site.middlewares=compress@docker"

6. Hydration directive (ensure interactivity for React components)

---

// In your .astro page
import InteractiveTours from '../components/InteractiveTours.tsx';

---

<InteractiveTours client:load />

7. Diagnostics

# Verify compressed response & caching

curl -sI -H "Accept-Encoding: br" https://weinerlebnistouren-heyl.de/_astro/index.<hash>.js \
 | egrep -i 'content-encoding|cache-control|vary|content-type'

# See who binds 80/443 on host

ss -ltnp | grep -E ':80|:443' || true
docker ps --format "table {{.Names}}\t{{.Ports}}"

# Validate nginx config

docker exec <nginx-container> nginx -t

# Inspect nginx default.conf with line numbers (for quick brace bugs)

docker exec -it <nginx-container> sh -c "nl -ba /etc/nginx/conf.d/default.conf | sed -n '1,120p'"

Notes & Rationale

Traefik terminates TLS → backend nginx stays simple and avoids certificate handling and port conflicts.

PNG won’t benefit from gzip; use WebP/AVIF or Astro Image (with Sharp) for big wins.

Pre-compression at build reduces runtime CPU and latency; nginx then serves .br/.gz directly.

Immutable caching is safe for hashed assets (/\_astro/<name>.<hash>.\*), dramatically improving repeat load times.

If you want, I can also drop this into a file for you and hand you a download link—just say the desired filename (e.g., `DEPLOYMENT-NOTES.md`).
::contentReference[oaicite:0]{index=0}
