### STAGE 1: Build ###
FROM node:16.16-alpine AS build
WORKDIR /app
COPY . .
RUN npm i && npm run build

### STAGE 2: Run ###
FROM nginx:1.22-alpine
WORKDIR /usr/share/nginx/html
COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/app-sales-universityhackathon ./
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;", "-c", "nginx.conf" ]