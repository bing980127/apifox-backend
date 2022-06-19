import { Service } from 'egg';
import { cryptoFn } from '../core/utils';
import { pick } from 'lodash';

interface UserInfo {
  email?: string;
  account?: string;
  introduction?: string;
  avatar?: string;
}

/**
 * User Service
 */
export default class User extends Service {
  /**
   * 获取用户信息
   * @param id - your account's id
   */
  public async getUserInfo(id: string) {
    return await this.ctx.model.User.findOne({ _id: id }, { password: 0 });
  }

  /**
   * 登录
   * @param email - your email
   * @param password - your password
   */
  public async login(email: string, password: string) {
    const { ctx } = this;
    const cryptoPwd = cryptoFn(password);
    const emailRes = await ctx.model.Login.findOne({ email });
    if (!emailRes || emailRes.password !== cryptoPwd) {
      ctx.throw('邮箱或密码输入错误', 200);
    }

    // jwt 配置
    const secret = this.app.config.jwt.secret;
    const jwtConfig = {
      expiresIn: '600m',
    };

    const token = ctx.app.jwt.sign(
      {
        email,
        id: emailRes._id,
      },
      secret,
      jwtConfig,
    );
    return {
      email,
      id: emailRes._id,
      token,
    };
  }

  /**
   * 注册
   * @param email - your email
   * @param password - your password
   */
  public async register(email: string, password: string) {
    const { ctx } = this;
    const cryptoPwd = cryptoFn(password);
    const emailRes = await ctx.model.Register.findOne({ email });
    if (emailRes) {
      ctx.throw('该邮箱已被注册');
    }
    const res = await ctx.model.Register.create({ email, password: cryptoPwd });
    return {
      email,
      id: res._id,
    };
  }

  /**
   * 修改密码
   * @param id - your account's id
   * @param email - your email
   * @param password - your password
   */
  public async updatePwd(id: string, email: string, password: string) {
    const { ctx } = this;
    const cryptoPwd = cryptoFn(password);
    const pwdRes = await ctx.model.Register.findOneAndUpdate({ _id: id }, { password: cryptoPwd });
    if (!pwdRes) {
      ctx.throw('密码修改失败');
    }
    return {
      email,
      id,
    };
  }

  /**
   * 修改资料
   * @param id - your account's id
   * @param body - post request body
   */
  public async updateUser(id: string, body: UserInfo) {
    const { ctx } = this;
    let userRes = await ctx.model.User.findOneAndUpdate({ _id: id }, body, { new: true });
    if (!userRes) {
      ctx.throw('资料修改失败');
    }
    return pick(userRes, ['email', 'account', 'introduction', '_id', 'avatar']);
  }
}
