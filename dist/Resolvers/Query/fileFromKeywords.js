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
const Images_1 = __importDefault(require("../../Model/Images"));
const IllustrationKeyword_1 = __importDefault(require("../../Model/IllustrationKeyword"));
const Illustration_1 = __importDefault(require("../../Model/Illustration"));
const AllKeywords_1 = __importDefault(require("../../Model/AllKeywords"));
const AllFiles_1 = __importDefault(require("../../Model/AllFiles"));
const fileFromKeyword = (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
    let elements = null;
    let key_present = null;
    let Without_key = null;
    switch (args.field) {
        case "image":
            if (!args.key || !args.key.length) {
                Without_key = yield Images_1.default.find();
                return {
                    files: Without_key,
                    error: null,
                };
            }
            else {
                key_present = yield ImageKeyword_1.default.find({ type: args.key });
            }
            break;
        case "illustration":
            if (!args.key || !args.key.length) {
                Without_key = yield Illustration_1.default.find();
                return {
                    files: Without_key,
                    error: null,
                };
            }
            else {
                key_present = yield IllustrationKeyword_1.default.find({ type: args.key });
            }
            break;
        default:
            if (!args.key || !args.key.length) {
                Without_key = yield AllFiles_1.default.find();
                return {
                    files: Without_key,
                    error: null,
                };
            }
            else {
                key_present = yield AllKeywords_1.default.find({ type: args.key });
                break;
            }
    }
    if (!key_present[0]) {
        return {
            files: null,
            error: {
                subject: "Keyword",
                message: "No image with the keyword",
            },
        };
    }
    elements = key_present[0].data.map((x) => {
        return { file: x[0], preview: x[1] };
    });
    return {
        files: elements,
        error: null,
    };
});
exports.fileFromKeyword = fileFromKeyword;
//# sourceMappingURL=fileFromKeywords.js.map