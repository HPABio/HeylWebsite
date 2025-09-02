# Stage 1: Build Astro site
FROM node:22-alpine AS builder

WORKDIR /app

COPY pnpm-lock.yaml ./
COPY package.json ./
RUN pnpm install

COPY . .
RUN pnpm run build   # creates /dist

# Stage 2: Serve with nginx
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
