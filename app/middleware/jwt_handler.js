const NOAUTH = ['/login', '/register'];
module.exports = (options) => {
  return async function jwtHandler(ctx, next) {
    const { url, header } = ctx.request;
    // 拿到传会数据的header 中的token值
    const token = header.authorization;
    if (NOAUTH.indexOf(url) !== -1) {
      await next();
      return;
    }
    if (!token) {
      ctx.throw(401, '未登录，请先登录');
      ctx.body = {
        code: 50008,
      };
    } else {
      let decode;
      // 解码token
      decode = await ctx.app.jwt.verify(token, options.secret, (err, decoded) => {
        if (err) {
          if (err.name === 'TokenExpiredError') {
            // token过期
            return 'TokenExpiredError';
          } else if (err.name === 'JsonWebTokenError') {
            // 无效的token
            return 'JsonWebTokenError';
          }
        } else {
          return decoded;
        }
      });

      if (decode === 'TokenExpiredError') {
        ctx.body = {
          code: 401,
          msg: 'token已过期，请重新登录',
        };
        return;
      }

      if (decode === 'JsonWebTokenError') {
        ctx.body = {
          code: 401,
          msg: 'token无效，请重新登录',
        };
        return;
      }
      await next();
    }
  };
};
