const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const illustrationSchema = new Schema({
    file: {
        type: String,
        required: true
    },
    preview: {
        type: String,
        required: true
    }
});

const IllustrationSchema = mongoose.model("imageSchema", illustrationSchema);

export { IllustrationSchema as default };
