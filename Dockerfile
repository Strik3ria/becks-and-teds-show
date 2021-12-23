FROM node:latest AS build

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginxinc/nginx-unprivileged:1-alpine

COPY --from=build /app/dist/becks-and-teds-show/ /usr/share/nginx/html
