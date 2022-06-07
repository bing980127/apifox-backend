import { Application } from 'egg';

export default (app: Application) => {
  const mongoose = app.mongoose;
  const { Schema } = mongoose;
  const ProjectSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
      },
      team: [
        {
          ref: 'Team',
          type: Schema.Types.ObjectId,
        },
      ],
    },
    { versionKey: false },
  );
  return mongoose.model('Project', ProjectSchema, 'project');
};
