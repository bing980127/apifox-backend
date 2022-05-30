import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  // 登录路由
  router.post('/noauth/login', controller.login.index);
  router.post('/noauth/register', controller.register.index);
  router.get('/', controller.login.index);
};
