import BaseController from '../core/base_controller';

export default class UserController extends BaseController {
  // 获取用户信息
  public async getUserInfo() {
    const { service } = this;
    const { id } = this.user;
    const res = await service.user.getUserInfo(id);
    this.success(res);
  }
  // 登录
  public async login() {
    const { ctx, service } = this;
    const body = ctx.request.body;
    const rule = {
      email: { type: 'email' },
      password: { type: 'string' },
    };
    ctx.validate(rule);
    const res = await service.user.login(body.email, body.password);
    this.success(res);
  }

  // 注册
  public async register() {
    const { ctx, service } = this;
    const body = ctx.request.body;
    const rule = {
      email: { type: 'email' },
      password: { type: 'string' },
    };
    ctx.validate(rule);
    const res = await service.user.register(body.email, body.password);
    this.success(res);
  }

  // 更新密码
  public async updatePwd() {
    const { ctx, service } = this;
    const body = ctx.request.body;
    const { id, email } = this.user;
    const rule = {
      password: { type: 'string' },
    };
    ctx.validate(rule);
    const res = await service.user.updatePwd(id, email, body.password);
    this.success(res);
  }

  // 更新用户资料
  public async updateUser() {
    const { ctx, service } = this;
    const { email, account, introduction = '' } = ctx.request.body;
    const rule = {
      email: { type: 'string' },
      account: { type: 'string' },
    };
    ctx.validate(rule);
    const { id } = this.user;
    const res = await service.user.updateUser(id, email, account, introduction);
    this.success(res);
  }
}
