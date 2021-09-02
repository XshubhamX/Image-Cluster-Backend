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
exports.search = void 0;
const allSearch_1 = require("../../helper/allSearch");
const illustrationSearch_1 = require("../../helper/illustrationSearch");
const imageSearch_1 = require("../../helper/imageSearch");
const search = (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
    let elements;
    if (!args.key.length) {
        return {
            payload: null,
            error: {
                message: "empty string",
                subject: "string empty",
            },
        };
    }
    switch (args.field) {
        case "image":
            elements = yield (0, imageSearch_1.imageSearch)(args.key);
            break;
        case "illustration":
            elements = yield (0, illustrationSearch_1.illustrationSearch)(args.key);
            break;
        default:
            elements = yield (0, allSearch_1.allSearch)(args.key);
    }
    return elements;
});
exports.search = search;
//# sourceMappingURL=search.js.map