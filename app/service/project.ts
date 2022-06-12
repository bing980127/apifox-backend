import { Service } from 'egg';
import { Status } from '../model/project';

export default class ProjectService extends Service {
  /**
   * 获取团队项目列表
   * @param id - team's id
   */
  public async get(id: string) {
    const projectsRes = await this.ctx.model.Project.find({ team: id, status: Status.open });
    return projectsRes;
  }
  /**
   * 创建项目
   * @param id - team's id
   * @param name - team's name
   */
  public async create(id: string, name: string) {
    await this.ctx.model.Project.insertMany({ name, team: id });
  }
  /**
   * 删除项目
   * @param id - team's id
   */
  public async delete(id: string) {
    await this.ctx.model.Project.findByIdAndUpdate({ _id: id }, { status: Status.closed });
  }
  /**
   * 修改项目名称
   * @param id - team's id
   * @param name - team's name
   */
  public async update(id: string, name: string) {
    await this.ctx.model.Project.findByIdAndUpdate({ _id: id }, { name });
  }
  /**
   * 转移项目
   * @param id - team's id
   * @param targetId - targetId's id
   */
  public async remove(id: string, targetId: string) {
    await this.ctx.model.Project.findByIdAndUpdate({ _id: id }, { team: targetId });
  }
}
