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
const Images_1 = __importDefault(require("../../Model/Images"));
const Illustration_1 = __importDefault(require("../../Model/Illustration"));
const fileFromKeyword = (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
    let elements = null;
    switch (args.field) {
        case "image":
            elements = yield Images_1.default.find().sort({ timestamp: -1 });
            break;
        case "illustration":
            elements = yield Illustration_1.default.find().sort({ timestamp: -1 });
            break;
        default:
            break;
    }
    if (!elements.length) {
        return {
            files: null,
            error: {
                subject: "Keyword",
                message: "No image with the keyword",
            },
        };
    }
    return {
        files: elements,
        error: null,
    };
});
exports.fileFromKeyword = fileFromKeyword;
//# sourceMappingURL=mainPageData.js.map