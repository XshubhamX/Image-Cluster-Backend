const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const illustrationSchema = new Schema({
    data: [{
        type: String,
        required: true,
    }]
});

const IllustrationSchema = mongoose.model("illustrationSchema", illustrationSchema);

export { IllustrationSchema as default };
