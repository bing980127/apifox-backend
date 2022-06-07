import { Service } from 'egg';

export default class ProjectService extends Service {
  /**
   * 获取团队项目列表
   * @param id - team's id
   */
  public async get(id: string) {
    await this.ctx.model.Project.find({ _id: id });
  }
  /**
   * 获取团队项目列表
   * @param id - team's id
   * @param name - team's name
   */
  public async create(id: string, name: string) {
    await this.ctx.model.Project.insertMany({ name, $push: { team: id } });
  }
}
