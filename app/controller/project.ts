import BaseController from '../core/base_controller';

export default class ProjectController extends BaseController {
  // 获取团队项目列表
  public async get() {
    const { ctx, service } = this;
    const { id } = ctx.params;
    console.log('id===========>', id);
    await service.project.get(id);
  }
  // 创建项目
  public async create() {
    const { ctx, service } = this;
    const { name, id } = ctx.request.body;
    const rule = {
      name: { type: 'string' },
      id: { type: 'string' },
    };
    ctx.validate(rule);
    await service.project.create(id, name);
    this.success(null);
  }
}
