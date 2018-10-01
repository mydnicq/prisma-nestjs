## Description

Graphql server based on [NestJS](https://nestjs.com/) and [Prisma](https://www.prisma.io/).

## Installation

```bash
$ npm install
$ docker-compose up
$ cd database
$ prisma deploy
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# incremental rebuild (webpack)
$ npm run webpack
$ npm run start:hmr

# production mode
$ npm run start:prod
```
