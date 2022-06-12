const HttpException = require('./http');
module.exports = class AuthException extends HttpException {
  constructor(message = 'token 已失效', errCode = 40000) {
    super(errCode, message, null, 401);
  }
};
