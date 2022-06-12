// This file is created by egg-ts-helper@1.30.3
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportInterface from '../../../app/model/interface';
import ExportLogin from '../../../app/model/login';
import ExportProject from '../../../app/model/project';
import ExportRegister from '../../../app/model/register';
import ExportTeam from '../../../app/model/team';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Interface: ReturnType<typeof ExportInterface>;
    Login: ReturnType<typeof ExportLogin>;
    Project: ReturnType<typeof ExportProject>;
    Register: ReturnType<typeof ExportRegister>;
    Team: ReturnType<typeof ExportTeam>;
    User: ReturnType<typeof ExportUser>;
  }
}
