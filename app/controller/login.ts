import BaseController from '../core/base_controller';

export default class HomeController extends BaseController {
  public async index() {
    const { ctx } = this;
    const { request } = ctx;
    this.success(request);
  }
}
