"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const vectorSchema = new Schema({
    data: [{
            type: String,
            required: true,
        }]
});
const VectorSchema = mongoose.model("vectorSchema", vectorSchema);
exports.default = VectorSchema;
//# sourceMappingURL=VectorGraphics.js.map