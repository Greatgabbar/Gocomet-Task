#BUILD stage
FROM node:12-stretch as build
WORKDIR /reactApp
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

#RUN stage
FROM nginx:latest
COPY --from=build /reactApp/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'