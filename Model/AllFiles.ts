const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const allFilesSchema = new Schema(
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
    timesamps: true,
  }
);

const AllFiles = mongoose.model("allFiles", allFilesSchema);

export { AllFiles as default };
