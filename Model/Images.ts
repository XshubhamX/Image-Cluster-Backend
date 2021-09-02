const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const imageSchema = new Schema(
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

const ImageSchema = mongoose.model("imageSchema", imageSchema);

export { ImageSchema as default };
