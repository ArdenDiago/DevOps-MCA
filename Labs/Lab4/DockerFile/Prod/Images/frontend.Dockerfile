FROM node:20-alpine AS web 

WORKDIR /app 

COPY frontend/package*.json .

RUN npm ci 

COPY frontend/ ./

RUN npm run build 


RUN echo "===== /app =====" && ls -la /app
RUN echo "===== DIRECTORIES =====" && find /app -maxdepth 3 -type d
RUN echo "===== FILES =====" && find /app -maxdepth 3 -type f | head -100


# ---- 
FROM nginx:alpine 

RUN rm -rf /usr/share/nginx/html/*

COPY --from=web /app/dist /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

