# Forntend Boilerplate

## Concept

- Linting by eslint, stylelint and flow
- Deploy gh-pages by CircleCI
- Run test(ava) in node
- Build for Chrome in development
- Build for IE11+ in production

## Stack

- Framework: react, redux, react-router
- Pakage manager: yarn
- transpiler: babel
- linter: eslint, flow, stylelint
- test runner: ava, enzyme
- coverage tools: istanbul, nyc
- builder: webpack
- css: postcss
- ci: circleci

## Development

```sh
# Run
yarn install
yarn start          # Start localhost:3355 with watch:js and watch:css

# Tasks
yarn watch     # Watch and build js for Chrome
yarn build     # Build js for Chrome
yarn build:production # Build js for IE11+
yarn lint       # eslint
yarn typecheck  # flow
yarn test       # Test in node
yarn test:cover # Test with coverage

yarn deploy # Deploy to github-pages
```

See package.json to learn others.

## Recommended tools

- Atom: linter, linter-eslint, linter-flow, liter-stylelint

## CircleCI and Deploy

- Clone this repository and register it.
- Run CI by `git push origin your-brach`
- Add deploy key to github
  - CircleCI -  Project Settings - PERMITTIONS -  Checkout SSH Key
- Deploy by `git push origin release` to its github pages.
- If you failed to delpoy by non-fast-forward, `git push origin :gh-pages` and retry it (work arround)

## License

MIT
