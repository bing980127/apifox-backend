import { Service } from 'egg';
import { cryptoFn } from '../core/utils';
/**
 * Register Service
 */
export default class Register extends Service {
  /**
   * 注册账号
   * @param email - your email
   * @param password - your password
   */
  public async index(email: string, password: string) {
    const { ctx } = this;
    const cryptoPwd = cryptoFn(password);
    const emailRes = await ctx.model.Register.findOne({ email });
    if (emailRes) {
      this.ctx.throw('该邮箱已被注册');
    }
    const res = await ctx.model.Register.create({ email, password: cryptoPwd });
    return {
      email,
      id: res._id,
    };
  }
}
