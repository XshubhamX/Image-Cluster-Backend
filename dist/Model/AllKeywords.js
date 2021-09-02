"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const allKeywordsSchema = new Schema({
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
const AllKeywordsSchema = mongoose.model("allKeywords", allKeywordsSchema);
exports.default = AllKeywordsSchema;
//# sourceMappingURL=AllKeywords.js.map