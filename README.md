<p align="center">
  <a href="https://front-boilerplate.nexpy.com.br/">
    <img src="https://user-images.githubusercontent.com/41436010/125207308-fbd9eb80-e261-11eb-98e4-7ae01ad1f143.png" width="600">
  </a>
</p>

# nexpy-frontend-boilerplate

[![Netlify Status](https://api.netlify.com/api/v1/badges/8858be17-4783-478e-b134-d8eb820b6d75/deploy-status)](https://app.netlify.com/sites/nexpy-frontend-boilerplate-storybook/deploys)
![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=nexpy-frontend-boilerplate)
[![License](https://img.shields.io/github/license/AllanOliveiraM/nexpy-frontend-boilerplate?style=flat)](https://github.com/nexpy-io/frontend-boilerplate/blob/main/LICENSE)
[![All Contributors](https://img.shields.io/github/all-contributors/AllanOliveiraM/nexpy-frontend-boilerplate/main)](#contributors-)
[![Nexpy](https://circleci.com/gh/AllanOliveiraM/nexpy-frontend-boilerplate.svg?style=svg)](https://app.circleci.com/pipelines/github/AllanOliveiraM/nexpy-frontend-boilerplate)

<br />

[nexpy-frontend-boilerplate](https://github.com/AllanOliveiraM/nexpy-frontend-boilerplate) is an Nexpy.io open source template repository for front end development based on [Next.js](https://github.com/vercel/next.js) and [TypeScript](https://github.com/microsoft/TypeScript).

<br /><br />

## More Docs

**Documentation is under construction and may not be fully available.**

A components documentation is available [here](https://nexpy-frontend-boilerplate-storybook.nexpy.com.br/).

<br /><br />

## Installation

<br />

### Package Manager

Use the package manager [yarn](https://yarnpkg.com/getting-started/install) to install the dependencies.

**Important:** Make sure you have the yarn installed globally as it is necessary for use the project's features.

Install yarn with the following command:

```sh
npm install -g yarn
```

<br />

### Dependencies

Install dependencies with the following command:

```sh
yarn
```

The postinstall script will run automatically. If you notice that this has not occurred, run the following command:

```sh
yarn postinstall
```

This command will install the husky hooks in the git repository to control preprocessors for commits and pushes, such as code formatters and Eslint, and the required automatic project settings.

<br />

#### The main technologies used

- [React Hook Form](https://react-hook-form.com/)
- [XStyled](https://xstyled.dev/)
- [Axios](https://www.npmjs.com/package/axios)
- [Lodash](https://lodash.com/)
- [Sass](https://sass-lang.com/)
- [SWR](https://swr.vercel.app/)
- [Use Context Selector](https://www.npmjs.com/package/use-context-selector/v/2.0.0-alpha.5)
- [Yup](https://www.npmjs.com/package/yup)
- [Sentry](https://sentry.io/)

There are others being used and they can be found in the development dependencies and dependencies section of the package.json file.

<br /><br />

## Available scripts and usage

If you look at the scripts inside package.json you will see several methods, among them:

<br />

### Run development server

```sh
yarn dev
```

A server with a fast refresh for development. Do not use for production.

<br /><br />

### Reinstall dependencies

```sh
yarn reinstall
```

Asynchronously deletes all dependencies and reinstalls using yarn.

<br /><br />

### Commit your changes

```sh
yarn commit
```

Use the `yarn commit` command to start the [git-cz](https://www.npmjs.com/package/git-cz) cli. With
that we can make the commits in a standardized way.

<br /><br />

### Create production build

```sh
yarn build
```

Creates an optimized production build of the application. The output displays information about each route.

<br /><br />

### Starts the application in production mode

```sh
yarn start
```

The application should be compiled with next build first.

The application will start at `http://localhost:3000` by default. The default port can be changed with `-p`, like so:

```sh
npx next start -p 4000
```

Or using the PORT environment variable:

```sh
PORT=4000 npx next start
```

Note: PORT can not be set in .env as booting up the HTTP server happens before any other code is initialized.

<br /><br />

### Check typing

```sh
yarn type-check
```

Run a test using the TypeScript compiler to identify code typing failures.

<br /><br />

### Start debug server

```sh
yarn debug
```

Starts the development server with debug options. V8 inspector integration allows tools such as Chrome DevTools and IDEs to debug and profile Node.js instances.

<br /><br />

### Automatically format code

```sh
yarn prettier
```

Auto-formats code using Prettier. This command writes possible corrections to the project files.

<br /><br />

### Check code style

```sh
yarn prettier:check
```

Checks that all files follow the style pattern without changing them, reporting possible errors to the console.

<br /><br />

### Fix code integrity

```sh
yarn eslint
```

Looks for code integrity errors and fixes where possible. This command writes possible corrections to the project files.

<br /><br />

### Check code integrity

```sh
yarn eslint:check
```

Looks for code integrity errors in all files without changing them, reporting possible errors to the console.

<br /><br />

### Check stylesheet patterns

```sh
yarn stylelint:check
```

Checks whether the styling in CSS files and styled components are properly formatted.

<br /><br />

### Test the application

```sh
yarn test
```

Run the automated tests using [jest](https://jestjs.io/).

<br /><br />

### Run development storybook server

```sh
yarn storybook
```

A server with a fast refresh for components documentation development. Do not use for production.

<br /><br />

### Buid storybook

```sh
yarn build:storybook
```

Created a production build for storybook.

<br /><br />

## Roadmap

See what we are preparing for the future:

- Theme configs;
- Create a design system components with docs;
- Auth;
- Custom hooks.

<br /><br />

## Contributors ✨

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/camilaffonseca"><img src="https://avatars.githubusercontent.com/u/54648900?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Camila Fonseca</b></sub></a><br /><a href="https://github.com/AllanOliveiraM/nexpy-frontend-boilerplate/commits?author=camilaffonseca" title="Code">💻</a> <a href="#ideas-camilaffonseca" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/AllanOliveiraM"><img src="https://avatars.githubusercontent.com/u/41436010?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Allan Oliveira Miraballes</b></sub></a><br /><a href="https://github.com/AllanOliveiraM/nexpy-frontend-boilerplate/commits?author=AllanOliveiraM" title="Code">💻</a> <a href="https://github.com/AllanOliveiraM/nexpy-frontend-boilerplate/commits?author=AllanOliveiraM" title="Documentation">📖</a> <a href="#ideas-AllanOliveiraM" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-AllanOliveiraM" title="Maintenance">🚧</a> <a href="#projectManagement-AllanOliveiraM" title="Project Management">📆</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

<br />

## License

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) license.
