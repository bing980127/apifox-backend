import { Application } from 'egg';

export default (app: Application) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const TeamSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
      },
      administrator: [{ type: Schema.Types.ObjectId }], // 管理员
      members: [{ type: Schema.Types.ObjectId }], // 普通成员
    },
    { versionKey: false },
  );
  return mongoose.model('Team', TeamSchema, 'team');
};
