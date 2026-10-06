FROM node:26

WORKDIR /app

COPY Oracle24/package*.json ./

RUN npm ci

COPY Oracle24/ .

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
