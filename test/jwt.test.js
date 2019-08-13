'use strict';

const mm = require('egg-mock');
// const assert = require('assert');

describe('test/jwt.test.js', () => {
  let app;

  afterEach(mm.restore);

  // 'jwt-app.jwt', 'jwt-middleware',
  // [ 'jwt-app.jwt', 'jwt-middleware', 'jwt-router-middleware' ].forEach(name => {
  [ 'jwt-app.jwt' ].forEach(name => {
    describe(name, () => {
      before(async () => {
        app = mm.app({
          baseDir: `apps/${name}`,
          plugin: true,
          cache: false,
        });
        await app.ready();
      });

      after(() => app.close());

      const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50SWQiOiIyZTMzNDBmMDY4Nzk0ODViOWRmZjJkOWI2ZWFlMGYyZCIsImlzcyI6IkZaVUM1VlplR3FWM3FsOUJybUM3S0k0VEIwQ0FMZEZPIiwidGVuYW50SWQiOiIyYmE1NmI3YzNmOGM0OTU5ODIwN2QyYTlmZTU0OTcwYiIsImNoYW5uZWwiOiJwYyIsImV4cCI6MTU2NDU2ODEzMiwidXNlcklkIjoiYTIzOTQ3Nzg5MzlmNDU4Mzg5ZGY4ZWFiOTMxOTQ4M2UiLCJpYXQiOjE1NjQ1NjA5MzJ9.Fo55sdXbBgnDp2_TbQ9EDxdcSxc9m-EyhjLPRjNhFKU';

      it('should be ok', async () => {
        await app
          .httpRequest()
          .get('/test')
          .set('Authorization', token)
          .expect(200);
      });


      it('should throw 401 if token is empty! ', async () => {
        await app
          .httpRequest()
          .get('/test')
          .expect(401);
      });
    });
  });
});
