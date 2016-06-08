# JavaScript packages

## Publishing guidelines

- All packages to follow semver.
- Minimum bar for testing is every exported pure function to have a unit test.
- Packages should be added to the environment appropriate to their environment. For instance React Native-only components should be saved under `react-native`, node to `node` etc.
- All packages to be named `@drivetribe/environment-package`, ie a ReactDOM component called `image` would be published as `@drivetribe/react-dom-image`.

## Resources

* [Style guide](https://github.com/drivetribe/javascript-style-guide)
