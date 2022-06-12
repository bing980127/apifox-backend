import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.user.getUserInfo);
  router.get('/user', controller.user.getUserInfo);
  // 登录路由
  router.post('/login', controller.user.login);
  // 注册
  router.post('/register', controller.user.register);
  // 修改密码
  router.put('/user/updatePwd', controller.user.updatePwd);
  // 编辑用户信息
  router.put('/user/edit', controller.user.updateUser);

  // 获取团队列表
  router.get('/team/get', controller.team.get);
  // 创建团队
  router.post('/team/create', controller.team.create);
  // 修改团队名称
  router.put('/team/update', controller.team.update);
  // 解散团队
  router.delete('/team/delete', controller.team.delete);
  // 邀请成员
  router.post('/team/invitate', controller.team.invitate);
  // 获取团队成员列表
  router.get('/team/members', controller.team.getMembers);

  // 获取项目列表
  router.get('/project/get', controller.project.get);
  // 创建项目
  router.post('/project/create', controller.project.create);
  // 修改项目
  router.post('/project/update', controller.project.update);
  // 删除项目
  router.delete('/project', controller.project.delete);

  // 获取项目接口
  router.get('/interface/get', controller.interface.get);
};
