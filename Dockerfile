#BUILD stage
FROM node:12-stretch as build
WORKDIR /reactApp
COPY . .
RUN npm ci
RUN npm run build

#RUN stage
FROM nginx:latest
COPY --from=build /reactApp/build /usr/share/nginx/html