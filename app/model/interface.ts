import { Application } from 'egg';
export default (app: Application) => {
  const mongoose = app.mongoose;
  const { Schema } = mongoose;
  const InterfaceSchema = new Schema(
    {
      method: {
        // get
        type: String,
        required: true,
      },
      path: {
        // /pet/{petId}/{dogId}
        type: String,
        required: true,
      },
      name: {
        // 查询宠物详情
        type: String,
      },
      folderId: {
        type: String,
      },
      status: {
        // developing
        type: String,
      },
      tags: {
        // ["宠物"]
        type: Array,
      },
      commonParameters: {
        // {"query":[{"name":"name"}],"body":[],"cookie":[],"header":[]}
        type: Object,
      },
      responses: {
        // [{"jsonSchema":{"type":"object","properties":{"code":{"type":"integer","minimum":0,"maximum":0,"description":"状态码"},"data":{"type":"ref","$ref":"#/definitions/8344793","description":"宠物信息"}},"required":["code","data"],"x-apifox-orders":["code","data"]},"defaultEnable":true,"id":45442989,"name":"成功","apiDetailId":21148613,"projectId":0,"code":200,"contentType":"json","ordering":1,"createdAt":"2022-05-23T13:36:38.000Z","updatedAt":"2022-05-23T13:36:38.000Z","deletedAt":null}]
        type: Array,
      },
      type: {
        // http
        type: String,
      },
      parameters: {
        // {"path":[{"name":"petId","description":"宠物 ID","required":true,"sampleValue":"1"},{"name":"dogId","required":true}],"query":[]}
        type: Object,
      },
      requestBody: {
        // {"type":"multipart/form-data","parameters":[],"jsonSchema":{"type":"object","properties":{}}}
        type: {
          type: String,
          parameters: Array,
          jsonSchema: {
            type: String,
            properties: String,
          },
        },
      },
      commonResponseStatus: {
        // {"45442985":true,"45442986":true,"45442987":true,"45442988":true}
        type: Object,
      },
      auth: {
        // {"type":"bearer","bearer":{"token":"123"}}
        type: Object,
      },
      advancedSettings: {
        // {"SSLValidate":true,"followRedirects":true,"isDefaultUrlEncoding":true,"disableUrlEncoding":false}
        type: Object,
      },
    },
    { versionKey: false },
  );
  return mongoose.model('InterfaceSchema', InterfaceSchema, 'interface');
};
