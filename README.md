<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## Description

NestJs Architecture and Advance Patterns course project.
Understanding concepts from different types of Architectures such as N-Tier, Hexagonal and Event-Driven Architectures.

## Installation

```bash
$ npm install
```

## Run docker-compose

```bash
# set postgres database image
$ docker-compose up -d
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## TODO

- [x] Hexagonal Architecture on alarms directory.
- [x] Add enviroment file.
- [ ] Domain-Driven Design.
- [ ] CQRS.
- [ ] Event-Driven Architecture.
- [ ] Event sourcing

Nest is [MIT licensed](LICENSE).
