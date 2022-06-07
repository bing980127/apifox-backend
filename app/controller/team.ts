import { pick } from 'lodash';
import BaseController from '../core/base_controller';
export default class TeamController extends BaseController {
  // 获取团队列表
  public async get() {
    const { service } = this;
    const { id } = this.user;
    const res = await service.team.get(id);
    this.success(res);
  }
  // 创建团队
  public async create() {
    const { ctx, service } = this;
    const { id } = this.user;
    const body = ctx.request.body;
    const rule = {
      name: { type: 'string' },
    };
    ctx.validate(rule);
    await service.team.create(id, body.name);
    this.success(null);
  }
  // 修改团队名称
  public async update() {
    const { ctx, service } = this;
    const { name, id } = ctx.request.body;
    const rule = {
      id: { type: 'string' },
      name: { type: 'string' },
    };
    ctx.validate(rule);
    await service.team.update(id, name);
    this.success(null);
  }
  // 解散团队
  public async delete() {
    const { ctx, service } = this;
    const { id: userId } = this.user;
    const { id } = ctx.request.body;
    const rule = {
      id: { type: 'string' },
    };
    ctx.validate(rule);
    await service.team.delete(userId, id);
    this.success(null);
  }
  // 邀请成员
  public async invitate() {
    const { ctx, service } = this;
    const { account, id } = ctx.request.body;
    const rule = {
      id: { type: 'string' },
      account: { type: 'string' },
    };
    ctx.validate(rule);
    await service.team.invitate(id, account);
    this.success(null);
  }
  // 获取成员列表
  public async getMembers() {
    const { ctx, service } = this;
    const { id } = ctx.request.body;
    const rule = {
      id: { type: 'string' },
    };
    ctx.validate(rule);
    const res = await service.team.getMembers(id);
    const response = res.map((item) => pick(item, ['_id', 'email', 'account', 'introduction']));
    this.success(response);
  }
}
