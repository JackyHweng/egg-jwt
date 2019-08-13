'use strict';
module.exports = () => {
  const config = {};

  config.jwt = {
    enable: true,
    enableParse: true,
    enableSignature: false,
    whiteUrls: [ '/test1' ],
  };

  return config;
};
