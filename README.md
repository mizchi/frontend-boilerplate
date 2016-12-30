# Modern Client Project ver 20161231

## Build

```sh
yarn install
yarn run build # Build
yarn run watch # Build by watching files
yarn run lint  # eslint
yarn run typecheck  # flow
yarn test      # Test
yarn run cover # Test with coverage
```

`$ open public/index.html` to open your static html file.

## CircleCI and Deploy

- Clone this repository and register it.
- Run CI by `git push origin your-brach`
- Add deploy key to github
  - CircleCI -  Project Settings - PERMITTIONS -  Checkout SSH Key
- Deploy by `git push origin release` to its github pages.

## TODO

- [ ] Build for production
- [ ] Build CSS by postcss
