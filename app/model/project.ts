import { Application } from 'egg';
export enum Status {
  open = 1,
  closed = 0,
}
export default (app: Application) => {
  const mongoose = app.mongoose;
  const { Schema } = mongoose;
  const ProjectSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
      },
      status: { type: Status, default: Status.open },
      team: {
        type: Schema.Types.ObjectId,
      },
    },
    { versionKey: false },
  );
  return mongoose.model('Project', ProjectSchema, 'project');
};
