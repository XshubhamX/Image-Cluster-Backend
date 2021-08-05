const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const imageSchema = new Schema({
    data: [{
        type: String,
        required: true,
    }]
});

const ImageSchema = mongoose.model("imageSchema", imageSchema);

export { ImageSchema as default };
