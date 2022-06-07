// This file is created by egg-ts-helper@1.30.3
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportErrorHandler = require('../../../app/middleware/error_handler');
import ExportJwtHandler = require('../../../app/middleware/jwt_handler');

declare module 'egg' {
  interface IMiddleware {
    errorHandler: typeof ExportErrorHandler;
    jwtHandler: typeof ExportJwtHandler;
  }
}
