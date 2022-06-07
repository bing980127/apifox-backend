import { Controller } from 'egg';
interface Token {
  id: string;
  email: string;
}

class BaseController extends Controller {
  get user(): Token {
    const token = this.ctx.request.header.authorization as string;
    if (!token) return {} as Token;
    return this.ctx.app.jwt.decode(token) as any;
  }

  success(data) {
    this.ctx.body = {
      data,
      code: 200,
    };
  }

  notFound(msg) {
    msg = msg || 'not found';
    this.ctx.throw(msg, 404);
  }
}

export default BaseController;
