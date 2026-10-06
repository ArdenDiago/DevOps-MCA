FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY ./ ./

ENV APP_NAME=StudentDockerApp

EXPOSE 3000

ENTRYPOINT ["node"]

CMD ["server.js"]
