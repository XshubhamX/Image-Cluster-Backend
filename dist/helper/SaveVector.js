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
exports.saveVector = void 0;
const VectorGraphicsKeyword_1 = __importDefault(require("../Model/VectorGraphicsKeyword"));
const VectorGraphics_1 = __importDefault(require("../Model/VectorGraphics"));
const AllFiles_1 = __importDefault(require("../Model/AllFiles"));
const chalk_1 = require("chalk");
const saveVector = (url, keywords) => __awaiter(void 0, void 0, void 0, function* () {
    let n = keywords.length;
    try {
        for (let i = 0; i < n; i++) {
            const foundKey = yield VectorGraphicsKeyword_1.default.findOne({
                type: chalk_1.keyword[i],
            });
            if (foundKey) {
                foundKey.data.push(url);
                yield foundKey.save();
            }
            else {
                const newKey = new VectorGraphicsKeyword_1.default({
                    type: keywords[i],
                    data: [],
                });
                newKey.data.push(url);
                yield newKey.save();
            }
        }
        const newVector = new VectorGraphics_1.default({
            file: url,
        });
        yield newVector.save();
        let countObject = yield AllFiles_1.default.findOne({ type: "vector" });
        if (countObject) {
            const c = countObject.count + 1;
            countObject.count = c;
            yield countObject.save();
        }
        else {
            countObject = new AllFiles_1.default({
                type: "vector",
                count: 1,
            });
            yield countObject.save();
        }
        return { key: countObject.id, error: null };
    }
    catch (e) {
        console.log(e);
        return {
            key: null,
            error: {
                subject: "Error",
                message: e,
            },
        };
    }
});
exports.saveVector = saveVector;
//# sourceMappingURL=SaveVector.js.map