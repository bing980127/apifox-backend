import BaseController from '../core/base_controller';

/**
 * need to do - 细节处理
 * 权限校验
 * 不属于该团队成员无权删除/修改项目名称
 */
export default class ProjectController extends BaseController {
  // 获取团队项目列表
  public async get() {
    const { ctx, service } = this;
    const { id } = ctx.query;
    const res = await service.project.get(id);
    this.success(res);
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
  // 删除项目 - 软删除
  public async delete() {
    const { ctx, service } = this;
    const { id } = ctx.request.body;
    const rule = {
      id: { type: 'string' },
    };
    ctx.validate(rule);
    await service.project.delete(id);
    this.success(null);
  }
  // 修改项目名称
  public async update() {
    const { ctx, service } = this;
    const { name, id } = ctx.request.body;
    const rule = {
      id: { type: 'string' },
      name: { type: 'string' },
    };
    ctx.validate(rule);
    await service.project.update(id, name);
    this.success(null);
  }
  // 移动项目
  public async remove() {
    const { ctx, service } = this;
    const { id, targetId } = ctx.request.body;
    const rule = {
      id: { type: 'string' },
      targetId: { type: 'string' },
    };
    ctx.validate(rule);
    await service.project.remove(id, targetId);
    this.success(null);
  }
}
