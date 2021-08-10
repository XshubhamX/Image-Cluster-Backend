"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const imageSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    data: [{
            type: String,
            required: true,
        }]
});
const ImageSchema = mongoose.model("imageSchema", imageSchema);
exports.default = ImageSchema;
//# sourceMappingURL=Image.js.map