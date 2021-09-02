const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const vectorKeywordSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
    },
    data: [
      [
        {
          type: String,
          required: true,
        },
        {
          type: String,
          required: true,
        },
      ],
    ],
  },
  {
    timestamps: true,
  }
);

const VectorKeywordSchema = mongoose.model(
  "vectorKeywordSchema",
  vectorKeywordSchema
);

export { VectorKeywordSchema as default };
