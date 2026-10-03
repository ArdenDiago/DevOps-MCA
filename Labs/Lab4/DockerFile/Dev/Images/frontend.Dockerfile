FROM node:20 

WORKDIR /app

COPY frontend/package*.json .

RUN npm i

COPY frontend/ .

ENTRYPOINT ["npm", "run"]

CMD ["dev", "--", "--host", "0.0.0.0"]

