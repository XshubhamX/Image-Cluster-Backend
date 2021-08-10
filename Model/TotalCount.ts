const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const totalCountSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
  },
});

const TotalCount = mongoose.model("totalCount", totalCountSchema);

export { TotalCount as default };
