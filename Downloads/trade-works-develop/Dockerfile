FROM node:latest

# COPY . /app

WORKDIR /app

RUN npm install
RUN npm audit fix
RUN npm run build