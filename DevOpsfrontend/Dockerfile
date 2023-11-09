From node:21 as node
WORKDIR /app
COPY . .
FROM nginx:latest
COPY --from=node /app/dist/summer-workshop-angular /usr/share/nginx/html

