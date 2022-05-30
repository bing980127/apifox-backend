// This file is created by egg-ts-helper@1.30.3
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportLogin from '../../../app/controller/login';
import ExportRegister from '../../../app/controller/register';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    login: ExportLogin;
    register: ExportRegister;
  }
}
