# Modern Client Project ver 20170219

## Concept

- Linting by eslint, stylelint and flow
- Deploy gh-pages by CircleCI
- Run test(ava) in node
- Build for Chrome in development
- Build for IE11+ in production

## Stack

- Framework: React, Redux
- pakage manager: yarn
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
yarn run watch     # Watch and build js for Chrome
yarn run build     # Build js for Chrome
yarn run build:production # Build js for IE11+
yarn run lint       # eslint
yarn run typecheck  # flow
yarn run test       # Test in node
yarn run test:cover # Test with coverage

script/deploy # Deploy to github-pages
script/compress # Minify js and css before deploy
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
