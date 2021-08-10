"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const totalCountSchema = new Schema({
    type: {
        type: String,
        required: true,
    },
    count: {
        type: Number,
    },
});
const TotalCount = mongoose.model("totalCount", totalCountSchema);
exports.default = TotalCount;
//# sourceMappingURL=TotalCount.js.map