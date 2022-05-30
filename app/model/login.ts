import { Application } from 'egg';

export default (app: Application) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  // 下面得操作是连接数据库
  const LoginSchema = new Schema(
    {
      // 修改和新增用到，规定字段得类型和其他条件等
      email: {
        type: Schema.Types.String,
        required: true,
      },
      _id: {
        type: Schema.Types.ObjectId,
        required: true,
      },
      introduction: {
        type: String,
      },
    },
    { versionKey: false },
  );

  return mongoose.model('Login', LoginSchema, 'login');
};
