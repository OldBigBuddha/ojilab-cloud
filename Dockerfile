# syntax=docker/dockerfile:1

FROM node:lts-alpine AS build-stage
WORKDIR /app
COPY . ./
RUN npm install && \
  npm run export

FROM nginx:stable-alpine AS production-stage
COPY --from=build-stage /app/out /usr/share/nginx/html
CMD [ "nginx", "-g", "daemon off;" ]