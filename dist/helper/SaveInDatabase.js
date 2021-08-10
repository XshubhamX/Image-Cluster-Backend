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
exports.saveInDatabase = void 0;
const SaveImage_1 = require("./SaveImage");
const SaveVector_1 = require("./SaveVector");
const SaveIllustrator_1 = require("./SaveIllustrator");
const saveInDatabase = (type, url, keywords, previewUrl) => __awaiter(void 0, void 0, void 0, function* () {
    let data;
    switch (type) {
        case ("image"):
            data = yield SaveImage_1.saveImage(url, keywords, previewUrl);
            break;
        case ("vector"):
            data = yield SaveVector_1.saveVector(url, keywords);
            break;
        default:
            data = yield SaveIllustrator_1.saveIllustration(url, keywords, previewUrl);
    }
    return data;
});
exports.saveInDatabase = saveInDatabase;
//# sourceMappingURL=SaveInDatabase.js.map