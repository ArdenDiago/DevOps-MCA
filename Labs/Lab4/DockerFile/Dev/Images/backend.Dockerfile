FROM node:22

WORKDIR /app 

COPY backend/package*.json .

RUN npm i 

COPY backend/ .

ENTRYPOINT ["npm", "run"]

CMD ["dev"]
