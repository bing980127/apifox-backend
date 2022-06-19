import BaseController from '../core/base_controller';

export default class UploadController extends BaseController {
  public async updateAvatar() {
    const { service, ctx } = this;
    // 获取form表单的内容
    const blob = await ctx.getFileStream();
    const res: any = await service.uploadFile.index(blob);
    if (res.filePath) {
      const { id } = this.user;
      await service.user.updateUser(id, { avatar: res.filePath });
    }
    this.success(res);
  }
}
