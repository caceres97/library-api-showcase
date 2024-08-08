# Library API REST | NestJs

By Angel Caceres

## Aclarations

This is just a taste of my work, isn't complete bc due of time, but checking the structure and services you'll be able to know more about my skills.

Completed stuff:

- Jwt auth
- Rentals
- Books creations and copies
- User management
- Author and Genres CRUDs
- Good pr's to control the version
- Setup the debugger

Missing Stuff:

- Roles functionalities
- Unit testing
- e2e testing
- Filters and pagination

Some good stuff:

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
- [Postman on project](https://github.com/caceres97/library-api-showcase/blob/main/Library.postman_collection.json)

## Stay in touch

- Author - [Angel Caceres](https://github.com/caceres97)
- LinkedIn - [https://www.linkedin.com/in/caceres-angel](https://www.linkedin.com/in/caceres-angel)

## License

Nest is [MIT licensed](LICENSE).
