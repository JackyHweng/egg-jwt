'use strict';

const assert = require('assert');

const MIDDLEWARE_NAME_JWT = 'jwt';
// const MIDDLEWARE_NAME_JWT = 'params';

module.exports = app => {
  const { config } = app;
  console.log('config : ', config.appMiddleware);
  const index = config.appMiddleware.indexOf(MIDDLEWARE_NAME_JWT);

  assert.equal(
    index,
    -1,
    `Duplication of middleware name found: ${MIDDLEWARE_NAME_JWT}. Rename your middleware other than "${MIDDLEWARE_NAME_JWT}" please.`
  );

  config.appMiddleware.unshift(MIDDLEWARE_NAME_JWT);
};
