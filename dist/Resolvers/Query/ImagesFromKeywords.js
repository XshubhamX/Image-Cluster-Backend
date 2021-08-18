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
const ImageKeyword_js_1 = __importDefault(require("../../Model/ImageKeyword.js"));
const IllustrationKeyword_js_1 = __importDefault(require("../../Model/IllustrationKeyword.js"));
const fileFromKeyword = (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
    let elements = null;
    switch (args.field) {
        case ("image"):
            elements = yield ImageKeyword_js_1.default.find({ type: args.key });
            break;
        case ("illustration"):
            elements = yield IllustrationKeyword_js_1.default.find({ type: args.key });
            break;
        default:
            break;
    }
    return {
        files: elements,
        error: null
    };
});
exports.fileFromKeyword = fileFromKeyword;
//# sourceMappingURL=ImagesFromKeywords.js.map