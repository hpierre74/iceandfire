# IceAndFire

Ice and Fire is a small project consuming [an ice and fire API](https://anapioficeandfire.com/). It displays Game of Thrones books information.

## Getting started

After cloning the project, in your terminal, run:

```sh
yarn && yarn start got-books
```

Then browse http://localhost:4200 to access the application.

## Contributing

This project was generated using [Nx](https://nx.dev).

### Road map

- Caching: Add React-Query | RTK Query | SWC and use ETag
- Unit tests: Of course...
- End to end tests: Of course...

### Directory structure

As most Nx applications monorepos, the project has two main directories:

- apps: Applications shells with a corresponding end-to-end directory ending with `-e2e`.
- libs: Everything else that your applications would need. The idea is to segregate domains and reuse code, everything is a package.

#### In depth

- components: UI reusable components not falling under any specific domain, generally free of any business logic.
- hooks: repository wide react-hooks not falling under any specific domain.
- modules/$domain: business logic modules, segregated by domains.
- store: Global state configuration.

### Generate an application

Run `nx g @nrwl/react:app <my-app>` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

### Generate a library

Run `nx g @nrwl/react:lib <my-app>` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@iceandfire/<my-app>`.

### Development server

Run `nx serve <my-app>` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `nx g @nrwl/react:component my-component --project=<my-app>` to generate a new component.

### Build

Run `nx build <my-app>` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `nx test <my-app>` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

### Running end-to-end tests

Run `nx e2e <my-app>` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

### Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

### Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
