FROM node:17-alpine3.14

WORKDIR /app

# hexoのインストール
RUN npm install -g hexo-cli

# pdftohtml
RUN apk add poppler-utils

EXPOSE 4000