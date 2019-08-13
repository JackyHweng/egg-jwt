'use strict';

module.exports = app => {
  class LoginController extends app.Controller {
    * index() {
      console.log('query body : ', this.ctx.query);
      this.ctx.body = this.ctx.query;
    }
  }
  return LoginController;
};
