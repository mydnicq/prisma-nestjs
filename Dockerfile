FROM node:10.10.0-alpine

WORKDIR /usr/app

COPY package.json .
COPY package-lock.json .
RUN npm install --quiet

COPY . .

RUN npm run dist