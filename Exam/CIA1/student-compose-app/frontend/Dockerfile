FROM nginx:alpine

ENV ENDPOINT=http://localhost:5000

COPY index.html /usr/share/nginx/html/index.html

CMD ["/bin/sh", "-c", "envsubst '$ENDPOINT' < /usr/share/nginx/html/index.html > /tmp/index.html && mv /tmp/index.html /usr/share/nginx/html/index.html && nginx -g 'daemon off;'"]

