# ITO Library API REST | NestJs

Code Challenge by Angel Caceres

## Aclarations

Hello there! due some timing problema I wasn't able to cover the 100% of the challenge as I wish, but I'll let you know the status, I hope we can work together soon :)

Completed stuff:

- Jwt auth
- Rentals
- Books creations and copies
- User management
- Author and Genres CRUDs

Missing Stuff:

- Roles functionalities
- Unit testing (the challenge not specify but I wanted to do it)
- e2e testing (Same here)
- Filters and pagination

Some extra stuff:

- The user can rent only 5 books at the same time.
- The getters for books include copies and rental stock
- I used transactions to ensure the flow of the functionalities as rent book and book creation.
- I implemented prismajs, this allow us to have a very nice types for our app.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# push schema to mongoDB server (mandatory)
$ npx prisma db push

# development
$ npm run start


# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Docs

- [Healthcheck](https://clownfish-app-jprkw.ondigitalocean.app)
- [https://clownfish-app-jprkw.ondigitalocean.app/docs](https://clownfish-app-jprkw.ondigitalocean.app/docs)
- [Postman on project](https://github.com/caceres97/ito-library-api/blob/main/ITO-Library.postman_collection.json)

## Stay in touch

- Author - [Angel Caceres](https://github.com/caceres97)
- LinkedIn - [https://www.linkedin.com/in/caceres-angel](https://www.linkedin.com/in/caceres-angel)

## License

Nest is [MIT licensed](LICENSE).
