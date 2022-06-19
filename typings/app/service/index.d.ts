// This file is created by egg-ts-helper@1.30.3
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportInterface from '../../../app/service/interface';
import ExportProject from '../../../app/service/project';
import ExportTeam from '../../../app/service/team';
import ExportUploadFile from '../../../app/service/uploadFile';
import ExportUser from '../../../app/service/user';

declare module 'egg' {
  interface IService {
    interface: AutoInstanceType<typeof ExportInterface>;
    project: AutoInstanceType<typeof ExportProject>;
    team: AutoInstanceType<typeof ExportTeam>;
    uploadFile: AutoInstanceType<typeof ExportUploadFile>;
    user: AutoInstanceType<typeof ExportUser>;
  }
}
