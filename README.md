# Modern Client Project ver 20161231

## Concept

- Linting by eslint and flow
- Deploy gh-pages by CircleCI
- Run test(ava) in node
- Build for Chrome in development
- Build for IE11+ in production

## Stack

- yarn
- babel
- eslint
- ava
- webpack
- flow
- postcss
- circleci

## Development

```sh
yarn install
yarn run build:js   # Build
yarn run watch:js   # Build by watching files
yarn run lint       # eslint
yarn run typecheck  # flow
yarn test           # Test in node
yarn run cover      # Test with coverage
```

`$ open public/index.html` to open your static html file.

## CircleCI and Deploy

- Clone this repository and register it.
- Run CI by `git push origin your-brach`
- Add deploy key to github
  - CircleCI -  Project Settings - PERMITTIONS -  Checkout SSH Key
- Deploy by `git push origin release` to its github pages.

## License

MIT
