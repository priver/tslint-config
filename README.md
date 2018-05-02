# @priver/tslint-config

Shareable config for [tslint]. Uses rules from [`tslint-eslint-rules`] and [`tslint-react`].

[![build status](https://img.shields.io/travis/priver/tslint-config/master.svg?style=flat-square)](https://travis-ci.com/priver/tslint-config)
[![npm version](https://img.shields.io/npm/v/@priver/tslint-config.svg?style=flat-square)](https://www.npmjs.com/package/@priver/tslint-config)
[![npm downloads](https://img.shields.io/npm/dm/@priver/tslint-config.svg?style=flat-square)](https://www.npmjs.com/package/@priver/tslint-config)
[![license](https://img.shields.io/github/license/priver/tslint-config.svg?style=flat-square)](https://github.com/priver/tslint-config/blob/master/LICENSE.txt)

## Installation

Install the correct versions of each package, which are listed by the command:

```bash
yarn info @priver/tslint-config peerDependencies
# or
npm info @priver/tslint-config peerDependencies
```

Then install this package:

```bash
yarn add @priver/tslint-config --dev
# or
npm install @priver/tslint-config --save-dev
```

## Usage

### Basic

Add the following in your `tslint.json`:

```json
{
    "extends": "@priver/tslint-config"
}
```

### React

Add the following in your `tslint.json`:

```json
{
    "extends": "@priver/tslint-config/react"
}
```

[tslint]: https://palantir.github.io/tslint/
[`tslint-eslint-rules`]: https://github.com/buzinas/tslint-eslint-rules
[`tslint-react`]: https://github.com/palantir/tslint-react
