# Neo Smart Blinds - Test View

## A test build to allow freelancers to develop components for the Neo Smart Blinds Controller App

## Features

* [React](http://facebook.github.io/react/);
* [Alt](http://alt.js.org/) as the flux implementation;
* [Webpack](http://webpack.github.io/) for asset bundling;
* [React hot loader](https://github.com/gaearon/react-hot-loader) enabled out of the box. Changes to React components will show in the browser immediately without a full reload;
* [Babel](https://babeljs.io/) for ES6+ transpilation;
* [SASS](http://sass-lang.com/) (SCSS or Sass style), [Less](http://lesscss.org/), and [Autoprefixer](https://github.com/postcss/autoprefixer) enabled by default through Webpack;
* Image loaders setup and ready to go so you can reference your images as `require()` statements in JS, or just use `url()` as usual in CSS and Webpack will take care of the rest;
* [Karma](http://karma-runner.github.io/0.12/index.html) + [Mocha](http://mochajs.org/) & [Chai](http://chaijs.com/) for testing; 
* [Optional support for ESLint via babel-eslint](https://github.com/bradleyboy/yarsk#linting).

## Usage

Fork this repo, then run:

```
npm install
npm run start-local
```

That will fire up a webpack dev server in **hot** mode. Most changes will be reflected in the browser automatically without a browser reload. You can view the app in the browser at `http://localhost:8080`.

## Tests

The tests use Karma, Mocha and Chai through PhantomJS. See the example test in `app/Application/__tests__/index.js`. The test suite can be run in watch mode (tests will re-run each time a file changes), using:

```
npm run test:watch
```

## Building

To generate a production build, run:

```
npm run build
```

The above command will generate a `dist` folder with the appropriate index.html file along with the minified CSS and JS files.


## Linting

Linting settings can be be found in `.eslintrc`, [consult its documentation](http://eslint.org/docs/rules/). Linting is run before each webpack build when a `.eslintrc` file is present.
