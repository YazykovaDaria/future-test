FROM node:17-alpine as build
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
RUN npm run build
EXPOSE 5173
CMD ["npm", "run", "dev"]
