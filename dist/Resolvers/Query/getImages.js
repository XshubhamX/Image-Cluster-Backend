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
exports.allImages = void 0;
const Images_1 = __importDefault(require("../../Model/Images"));
const allImages = (parent, args, context, info) => __awaiter(void 0, void 0, void 0, function* () {
    let images;
    try {
        images = yield Images_1.default.find().sort({ datefield: -1 });
        if (images.length === 0) {
            return {
                images: null,
                error: {
                    subject: "No More images",
                    message: "No more images",
                },
            };
        }
        return {
            images,
            error: null,
        };
    }
    catch (e) {
        return {
            images: null,
            error: {
                subject: "error",
                message: "e",
            },
        };
    }
});
exports.allImages = allImages;
//# sourceMappingURL=getImages.js.map