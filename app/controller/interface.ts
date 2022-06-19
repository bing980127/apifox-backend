import BaseController from '../core/base_controller';

export default class InterfaceController extends BaseController {
  // 获取所有接口
  public async get() {
    const { service } = this;
    await service.interface.get();
    this.success(null)
  }
  // 创建接口
  public async create() {}
}
