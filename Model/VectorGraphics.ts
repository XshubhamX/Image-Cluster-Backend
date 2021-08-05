const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const vectorSchema = new Schema({
    data: [{
        type: String,
        required: true,
    }]
});

const VectorSchema = mongoose.model("vectorSchema", vectorSchema);

export { VectorSchema as default };
