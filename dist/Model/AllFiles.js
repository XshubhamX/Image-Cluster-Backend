"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const allFilesSchema = new Schema({
    file: {
        type: String,
        required: true,
    },
    preview: {
        type: String,
        required: true,
    },
}, {
    timesamps: true,
});
const AllFiles = mongoose.model("allFiles", allFilesSchema);
exports.default = AllFiles;
//# sourceMappingURL=AllFiles.js.map