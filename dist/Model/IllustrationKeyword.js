"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const illustrationKeywordSchema = new Schema({
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
}, {
    timestamps: true,
});
const IllustrationKeywordSchema = mongoose.model("illustrationKeywordSchema", illustrationKeywordSchema);
exports.default = IllustrationKeywordSchema;
//# sourceMappingURL=IllustrationKeyword.js.map