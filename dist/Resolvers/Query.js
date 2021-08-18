"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
const search_1 = require("./Query/search");
const getImages_1 = require("./Query/getImages");
const getIllustrations_1 = require("./Query/getIllustrations");
const fileFromKeywords_1 = require("./Query/fileFromKeywords");
const Query = {
    Project: () => {
        return "KPMG Image Cluster";
    },
    search: search_1.search,
    allImages: getImages_1.allImages,
    allIllustrations: getIllustrations_1.allIllustrations,
    fileFromKeyword: fileFromKeywords_1.fileFromKeyword
};
exports.default = Query;
//# sourceMappingURL=Query.js.map