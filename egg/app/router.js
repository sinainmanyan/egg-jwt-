'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/login', controller.home.login);
  router.post('/add',app.jwt, controller.home.add);
  router.post('/del',app.jwt, controller.home.del);
  router.post('/sel',app.jwt, controller.home.sel);
  router.post('/upt',app.jwt, controller.home.upt);
  
};
