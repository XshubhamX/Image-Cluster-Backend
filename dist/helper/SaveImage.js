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
exports.saveImage = void 0;
const Image_1 = __importDefault(require("../Model/Image"));
const TotalCount_1 = __importDefault(require("../Model/TotalCount"));
const saveImage = (url, keywords) => __awaiter(void 0, void 0, void 0, function* () {
    let n = keywords.length;
    try {
        for (let i = 0; i < n; i++) {
            const foundKey = yield Image_1.default.findById(keywords[i]);
            if (foundKey) {
                foundKey.data.push(url);
                yield foundKey.save();
            }
            else {
                const newKey = new Image_1.default({
                    _id: keywords[i],
                    data: [url]
                });
                yield newKey.save();
            }
        }
        let countObject = yield TotalCount_1.default.findOne({ type: "image" });
        if (countObject) {
            const c = countObject.count + 1;
            countObject.count = c;
            yield countObject.save();
        }
        else {
            countObject = new TotalCount_1.default({
                type: 'image',
                count: 1
            });
            yield countObject.save();
        }
        return { key: countObject.id, error: null };
    }
    catch (e) {
        return {
            key: null, error: {
                subject: "Error",
                message: e
            }
        };
    }
});
exports.saveImage = saveImage;
//# sourceMappingURL=SaveImage.js.map