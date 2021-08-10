const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const imageKeywordSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    data: [
        [
            {
                type: String,
                required: true,
            },
            {
                type: String,
                required: true
            }
        ]
    ]
});

const ImageKeywordSchema = mongoose.model("imageKeywordSchema", imageKeywordSchema);

export { ImageKeywordSchema as default };
