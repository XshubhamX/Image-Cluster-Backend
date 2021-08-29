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
exports.imageSearch = void 0;
const ImageKeyword_1 = __importDefault(require("../Model/ImageKeyword"));
const trimmer_1 = __importDefault(require("trimmer"));
const imageSearch = (key) => __awaiter(void 0, void 0, void 0, function* () {
    let elements;
    key = key.toLowerCase();
    key = trimmer_1.default.left(key);
    key = trimmer_1.default.right(key);
    if (key === "") {
        return {
            payload: null,
            error: {
                subject: "Keyword",
                message: "No keyword",
            },
        };
    }
    try {
        let x = new RegExp(key);
        elements = yield ImageKeyword_1.default.find({
            type: {
                $regex: x,
            },
        }).select("type");
    }
    catch (e) {
        return {
            payload: null,
            error: {
                subject: "Query Text",
                message: e,
            },
        };
    }
    if (!elements.length) {
        return {
            payload: null,
            error: {
                subject: "Query Text",
                message: "No files",
            },
        };
    }
    let elems = elements.map((e) => e.type);
    console.log(elems);
    return {
        payload: elems,
        error: null,
    };
});
exports.imageSearch = imageSearch;
//# sourceMappingURL=imageSearch.js.map