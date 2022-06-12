// This file is created by egg-ts-helper@1.30.3
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportInterface from '../../../app/controller/interface';
import ExportProject from '../../../app/controller/project';
import ExportTeam from '../../../app/controller/team';
import ExportUser from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    interface: ExportInterface;
    project: ExportProject;
    team: ExportTeam;
    user: ExportUser;
  }
}
