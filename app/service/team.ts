import { Service } from 'egg';
export default class TeamService extends Service {
  /**
   * 获取用户团队
   * @param id - your account's id
   */
  public async get(id: string) {
    const user = await this.ctx.model.User.findById({ _id: id });
    const teams = await this.ctx.model.Team.find({ _id: { $in: user.team } });
    return teams;
  }
  /**
   * 创建团队
   * @param id - your account's id
   * @param name - team's name
   */
  public async create(id: string, name: string) {
    const { id: teamId } = await this.ctx.model.Team.create({ name, administrator: id });
    await this.ctx.model.User.findOneAndUpdate(
      { _id: id },
      {
        $push: { team: teamId },
      },
    );
  }
  /**
   * 修改团队名称
   * @param id - your team's id
   * @param name - team's name
   */
  public async update(id: string, name: string) {
    await this.ctx.model.Team.findOneAndUpdate({ _id: id }, { name });
  }
  /**
   * 解散团队名称
   * @param userId - your account's id
   * @param id - your team's id
   */
  public async delete(userId: string, id: string) {
    await this.ctx.model.Team.findOneAndDelete({ _id: id });
    await this.ctx.model.User.findOneAndUpdate({ _id: userId }, { $pull: { team: id } });
  }
  /**
   * 邀请团队成员
   * @param id - team's id
   * @param account - member account
   */
  public async invitate(id: string, account: string) {
    const userRes = await this.ctx.model.User.findOneAndUpdate({ email: account }, { $push: { team: id } }, { new: true });
    if (!userRes) {
      this.ctx.throw('该账号不存在');
    }
    const { administrator, members } = await this.ctx.model.Team.findById({ _id: id });
    if (administrator.indexOf(userRes._id) !== -1 || members.indexOf(userRes._id) !== -1) {
      this.ctx.throw('该账号已经是团队成员');
    }
    await this.ctx.model.Team.findOneAndUpdate({ _id: id }, { $push: { members: userRes._id } });
  }

  /**
   * 获取团队成员列表
   * @param id - team's id
   */
  public async getMembers(id: string) {
    const teamRes = await this.ctx.model.Team.findById({ _id: id });
    const members = await this.ctx.model.User.find({ $or: [{ _id: { $in: teamRes.members } }, { _id: { $in: teamRes.administrator } }] });
    return members;
  }
}
