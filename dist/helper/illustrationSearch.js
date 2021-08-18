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
exports.illustrationSearch = void 0;
const IllustrationKeyword_1 = __importDefault(require("../Model/IllustrationKeyword"));
const trimmer_1 = __importDefault(require("trimmer"));
const illustrationSearch = (key) => __awaiter(void 0, void 0, void 0, function* () {
    let elements;
    key = key.toLowerCase();
    key = trimmer_1.default.left(key);
    key = trimmer_1.default.right(key);
    try {
        elements = yield IllustrationKeyword_1.default.find({
            subject: {
                $regex: new RegExp(key),
            },
        }).select("type");
    }
    catch (e) {
        return {
            payload: null,
            error: {
                subject: "Query Text",
                message: e
            }
        };
    }
    if (!elements.length) {
        return {
            payload: null,
            error: {
                subject: "Query Text",
                message: "No files"
            }
        };
    }
    return {
        payload: elements,
        error: null
    };
});
exports.illustrationSearch = illustrationSearch;
//# sourceMappingURL=illustrationSearch.js.map