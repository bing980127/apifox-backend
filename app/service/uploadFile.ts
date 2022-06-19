import { Service } from 'egg';
const qiniu = require('qiniu');
const path = require('path');

const sendToWormhole = require('stream-wormhole');
qiniu.conf.ACCESS_KEY = 'Vveq3vFuW3WPiSqFsR1pSTh8gqFfo9dQ0uBJAC-X';
qiniu.conf.SECRET_KEY = 't3-ZNNTf_2CbFXGvhLMU27FGZZciGeqbXUZzHUza';

//要上传的空间
const bucket = 'love-bing';
let mac = new qiniu.auth.digest.Mac(qiniu.conf.ACCESS_KEY, qiniu.conf.SECRET_KEY);
const options = {
  scope: bucket,
  expires: 60 * 60,
};

export default class uploadFileService extends Service {
  /**
   * @desc 七牛云文件上传
   * */
  async index(stream) {
    const { app } = this;
    const filename = Date.now() + '' + path.extname(stream.filename);
    const putPolicy = new qiniu.rs.PutPolicy(options);
    const uploadToken = putPolicy.uploadToken(mac);
    let config = new qiniu.conf.Config();
    config.zone = qiniu.zone.Zone_cn_east_2;
    const formUploader = new qiniu.form_up.FormUploader(config);
    const putExtra = new qiniu.form_up.PutExtra();
    try {
      const data = await new Promise((resolve, reject) => {
        /*
         * formUploader 有好几种上传方法，
         * putStream 数据流上传
         * put 表单上传
         * putFile 指定本地文件上传
         * */
        formUploader.putStream(uploadToken, filename, stream, putExtra, function (respErr, respBody, respInfo) {
          if (respErr) {
            return reject(respErr);
          }
          if (respInfo.statusCode === 200) {
            resolve(respBody.key);
          } else {
            return reject(respBody);
          }
        });
      });
      return {
        filePath: app.config.qiniuUrl + data,
        savePath: data,
      };
    } catch (e) {
      // 必须将上传的文件流消费掉，要不然浏览器响应会卡死
      await sendToWormhole(stream);
      return e;
    }
  }
}
