import { Application } from 'egg';

export default (app: Application) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const UserSchema = new Schema(
    {
      email: {
        type: String,
        required: true,
      },
      account: { type: String, required: true },
      introduction: { type: String },
      team: [{
        ref: 'Team',
        type: Schema.Types.ObjectId,
      }],
    },
    { versionKey: false },
  );

  return mongoose.model('User', UserSchema, 'user');
};
