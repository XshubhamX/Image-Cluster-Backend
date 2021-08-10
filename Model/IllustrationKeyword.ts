const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const illustrationKeywordSchema = new Schema({
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

const IllustrationKeywordSchema = mongoose.model("illustrationKeywordSchema", illustrationKeywordSchema);

export { IllustrationKeywordSchema as default };
