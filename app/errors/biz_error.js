/**
 *  Created by Jakcy On 2019-05-29
 */
'use strict';

class TokenError extends Error {
  constructor(message, code) {
    super(message);
    this.code = code || 401;
    this.status = code;
    this.message = message;
  }
}

class TokenEmptyError extends Error {
  constructor(message) {
    super(message);
    this.code = 401;
    this.status = 401;
    this.message = message;
  }
}


module.exports = {
  TokenError,
  TokenEmptyError,
};
