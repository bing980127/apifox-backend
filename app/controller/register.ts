import BaseController from '../core/base_controller';

export default class RegisterController extends BaseController {
  public async index() {
    const { ctx, service } = this;
    const body = ctx.request.body;
    const createRule = {
      email: { type: 'email' },
      password: { type: 'string' },
    };
    ctx.validate(createRule);
    const res = await service.register.index(body.email, body.password);
    this.success(res);
  }
}
