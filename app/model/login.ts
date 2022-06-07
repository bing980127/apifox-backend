import { Application } from 'egg';

export default (app: Application) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const LoginSchema = new Schema(
    {
      email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
    },
    { versionKey: false },
  );

  return mongoose.model('Login', LoginSchema, 'user');
};
