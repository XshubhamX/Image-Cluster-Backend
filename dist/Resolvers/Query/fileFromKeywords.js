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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileFromKeyword = void 0;
const ImageKeyword_1 = __importDefault(require("../../Model/ImageKeyword"));
const IllustrationKeyword_1 = __importDefault(require("../../Model/IllustrationKeyword"));
const fileFromKeyword = (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
    let elements = null;
    let key_present = null;
    switch (args.field) {
        case ("image"):
            key_present = yield ImageKeyword_1.default.find({ type: args.key });
            break;
        case ("illustration"):
            key_present = yield IllustrationKeyword_1.default.find({ type: args.key });
            break;
        default:
            break;
    }
    if (!key_present[0]) {
        return {
            files: null,
            error: {
                subject: "Keyword",
                message: "No image with the keyword"
            }
        };
    }
    elements = key_present[0].data.map(x => {
        return { file: x[0], preview: x[1] };
    });
    return {
        files: elements,
        error: null
    };
});
exports.fileFromKeyword = fileFromKeyword;
//# sourceMappingURL=fileFromKeywords.js.map