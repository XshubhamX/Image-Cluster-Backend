"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
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
exports.default = ImageKeywordSchema;
//# sourceMappingURL=ImageKeyword.js.map