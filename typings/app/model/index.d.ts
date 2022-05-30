// This file is created by egg-ts-helper@1.30.3
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportLogin from '../../../app/model/login';
import ExportRegister from '../../../app/model/register';

declare module 'egg' {
  interface IModel {
    Login: ReturnType<typeof ExportLogin>;
    Register: ReturnType<typeof ExportRegister>;
  }
}
