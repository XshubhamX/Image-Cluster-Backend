"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
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
const IllustrationSchema = mongoose.model("illustrationSchema", illustrationSchema);
exports.default = IllustrationSchema;
//# sourceMappingURL=Illustration.js.map