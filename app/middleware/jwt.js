'use strict';

const BizError = require('../errors/biz_error');
const { base64decode } = require('nodejs-base64');

module.exports = options => {
  return async function tokenValid(ctx, next) {
    if (!options.enable) {
      await next();
    }
    const whiteUrls = options.whiteUrls || [];
    const enableSignature = options.enableSignature || false;
    const enableParse = options.enableParse || false;
    const authToken = ctx.header.authorization;

    if (typeof authToken === 'undefined') {
      throw new BizError.TokenEmptyError('token is null!');
    }

    const isWhiteUrl = whiteUrls.some(whiteUrl => ctx.url.startsWith(whiteUrl));

    if (!isWhiteUrl) {
      if (enableSignature) {
        // todo signature koajwt(options);
      }

      if (enableParse) {
        const result = base64decode(authToken);
        ctx.query.user = result;
        ctx.query = {
          ...ctx.query,
          ...ctx.request.body,
        };
        await next();
      }
    } else {
      await next();
    }
  };
};
