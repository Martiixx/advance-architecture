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
- [x] Domain-Driven Design.
- [x] CQRS.
- [x] Event-Driven Architecture.
- [x] Event sourcing
- [ ] Sagas

## Curl Examples
```bash
# Post
$ curl --location --request POST 'localhost:3000/alarms' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Alarm 1",
    "severity": "HIGH",
    "triggeredAt": "2021-01-01T00:00:00.000Z",
    "items": [
        {
            "name": "Item 1",
            "type": "TYPE_1"
        },
        {
            "name": "Item 2",
            "type": "TYPE_2"
        }
    ]
}' | json_pp

# Get
$ curl http://localhost:3000/alarms | json_pp

```


Nest is [MIT licensed](LICENSE).
