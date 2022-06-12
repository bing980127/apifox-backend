import { Application } from 'egg';
export default (app: Application) => {
  const mongoose = app.mongoose;
  const { Schema } = mongoose;
  const InterfaceSchema = new Schema({}, { versionKey: false });
  return mongoose.model('InterfaceSchema', InterfaceSchema, 'interface');
};
