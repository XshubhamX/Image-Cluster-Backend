const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const vectorSchema = new Schema(
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

const VectorSchema = mongoose.model("vectorSchema", vectorSchema);

export { VectorSchema as default };
