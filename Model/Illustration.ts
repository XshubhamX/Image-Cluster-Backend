const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const illustrationSchema = new Schema(
  {
    file: {
      type: String,
      required: true,
    },
    preview: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const IllustrationSchema = mongoose.model(
  "illustrationSchema",
  illustrationSchema
);

export { IllustrationSchema as default };
