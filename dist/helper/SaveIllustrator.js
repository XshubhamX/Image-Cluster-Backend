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
exports.saveIllustration = void 0;
const IllustrationKeyword_1 = __importDefault(require("../Model/IllustrationKeyword"));
const IllustrationKeyword_2 = __importDefault(require("../Model/IllustrationKeyword"));
const TotalCount_1 = __importDefault(require("../Model/TotalCount"));
const AllKeywords_1 = __importDefault(require("../Model/AllKeywords"));
const saveIllustration = (url, keywords, previewUrl) => __awaiter(void 0, void 0, void 0, function* () {
    let n = keywords.length;
    try {
        for (let i = 0; i < n; i++) {
            const keyWordPresent = yield AllKeywords_1.default.find({ type: keywords[i] });
            if (!keyWordPresent) {
                const newKeyWord = new AllKeywords_1.default({
                    type: keywords[i]
                });
                yield newKeyWord.save();
                const newKey = new IllustrationKeyword_1.default({
                    type: keywords[i],
                    data: []
                });
                newKey.data.push([url, previewUrl]);
                yield newKey.save();
            }
            else {
                const foundKey = yield IllustrationKeyword_1.default.findOne({ type: keywords[i] });
                if (foundKey) {
                    foundKey.data.push([url, previewUrl]);
                    yield foundKey.save();
                }
                else {
                    const newKey = new IllustrationKeyword_1.default({
                        type: keywords[i],
                        data: []
                    });
                    newKey.data.push([url, previewUrl]);
                    yield newKey.save();
                }
            }
        }
        const newIllustration = new IllustrationKeyword_2.default({
            file: url,
            preview: previewUrl
        });
        yield newIllustration.save();
        let countObject = yield TotalCount_1.default.findOne({ type: "illustration" });
        if (countObject) {
            const c = countObject.count + 1;
            countObject.count = c;
            yield countObject.save();
        }
        else {
            countObject = new TotalCount_1.default({
                type: 'illustration',
                count: 1
            });
            yield countObject.save();
        }
        return { key: countObject.id, error: null };
    }
    catch (e) {
        console.log(e);
        return {
            key: null, error: {
                subject: "Error",
                message: e
            }
        };
    }
});
exports.saveIllustration = saveIllustration;
//# sourceMappingURL=SaveIllustrator.js.map