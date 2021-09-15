"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadFile = void 0;
const Upload_1 = require("../../helper/Upload");
const SaveInDatabase_1 = require("../../helper/SaveInDatabase");
const UploadFile = (parent, args, context, info) => __awaiter(void 0, void 0, void 0, function* () {
    if (!args.file && !args.type) {
        return {
            key: null,
            error: {
                subject: "preview",
                message: "Some inputs are missing",
            },
        };
    }
    if (!args.preview && args.type === "illustration") {
        return {
            key: null,
            error: {
                subject: "Preview",
                message: "Illustrations require Preview",
            },
        };
    }
    const { url, previewUrl } = yield (0, Upload_1.Upload)(args.file, args.preview);
    for (let i = 0; i < args.keywords.length; i++) {
        let new_word = args.keywords[i].replace(/[^a-zA-Z ]/g, "");
        new_word = new_word.replace(/\s+/g, " ").trim();
        args.keywords[i] = new_word;
    }
    const { key, error } = yield (0, SaveInDatabase_1.saveInDatabase)(args.type, url, args.keywords, previewUrl);
    return {
        key,
        error,
    };
});
exports.UploadFile = UploadFile;
//# sourceMappingURL=UploadFile.js.map