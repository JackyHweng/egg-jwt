# deepexi-egg-jwt

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[npm-image]: https://img.shields.io/npm/v/egg-jwt.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/egg-deepexi-jwt
[travis-image]: https://img.shields.io/travis/okoala/egg-jwt.svg?style=flat-square
[travis-url]: https://travis-ci.org/okoala/egg-jwt
[codecov-image]: https://img.shields.io/codecov/c/github/okoala/egg-jwt.svg?style=flat-square
[codecov-url]: https://codecov.io/github/okoala/egg-jwt?branch=master
[david-image]: https://img.shields.io/david/okoala/egg-jwt.svg?style=flat-square
[david-url]: https://david-dm.org/okoala/egg-jwt
[snyk-image]: https://snyk.io/test/npm/egg-jwt/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-jwt
[download-image]: https://img.shields.io/npm/dm/egg-jwt.svg?style=flat-square
[download-url]: https://www.npmjs.com/package/egg-deepexi-jwt

Deepexi Egg's JWT(JSON Web Token Authentication Plugin)

## Install

```bash
$ npm i egg-deepexi-jwt --save
```

or

```
yarn add egg-deepexi-jwt
```

## Usage

```js
// {app_root}/config/plugin.js
exports.jwt = {
  enable: true,
  package: "egg-deepexi-jwt"
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.jwt = {
    enable: true,
    enableParse: true,
    enableSignature: false,
    // if you don't like this way 
    // you can use in app/router.js 
    whiteUrls: ['/test'],
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

```javascript
// app/router.js
"use strict";

module.exports = app => {
  app.get('/test',app.controller.test.index);
 // if you want use middleware
  app.get('/test',app.middleware.jwt(),app.controller.test.index);
};
```

```js
// app/controller/test.js
("use strict");

module.exports = app => {
  class SuccessController extends app.Controller {
    index() {
         console.log('query body : ', this.ctx.query);
         this.ctx.body = this.ctx.query;
    }
  }
  return SuccessController;
};
```


## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
