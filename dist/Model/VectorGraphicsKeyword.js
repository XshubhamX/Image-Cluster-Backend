"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const vectorKeywordSchema = new Schema({
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
const VectorKeywordSchema = mongoose.model("vectorKeywordSchema", vectorKeywordSchema);
exports.default = VectorKeywordSchema;
//# sourceMappingURL=VectorGraphicsKeyword.js.map