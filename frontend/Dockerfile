FROM node:20 as build
WORKDIR /src

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html

COPY --from=build /src/dist .
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
