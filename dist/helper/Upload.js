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
exports.Upload = void 0;
const cloudinary_1 = __importDefault(require("cloudinary"));
const Upload = (file, preview) => __awaiter(void 0, void 0, void 0, function* () {
    let { createReadStream, filename } = yield file;
    let fileStream = createReadStream();
    let url, previewUrl;
    cloudinary_1.default.v2.config({
        cloud_name: "https-fstock-vercel-app",
        api_key: "583559134152936",
        api_secret: "fLoJI_6_LlQNAGU-MegBngFoGxc",
    });
    try {
        const result = yield new Promise((resolve, reject) => {
            fileStream.pipe(cloudinary_1.default.v2.uploader.upload_stream((error, result) => {
                if (error) {
                    reject(error);
                }
                resolve(result);
            }));
        });
        console.log(result);
        //@ts-ignore
        url = `https://res.cloudinary.com/https-fstock-vercel-app/image/upload/fl_attachment/${result.public_id}.${result.format}`;
    }
    catch (error) {
        console.log(error);
    }
    if (preview) {
        let { createReadStream, filename } = yield preview;
        let fileStream = createReadStream();
        try {
            const result = yield new Promise((resolve, reject) => {
                fileStream.pipe(cloudinary_1.default.v2.uploader.upload_stream((error, result) => {
                    if (error) {
                        reject(error);
                    }
                    resolve(result);
                }));
            });
            //@ts-ignore
            previewUrl = result.secure_url;
        }
        catch (error) {
            console.log(error);
        }
    }
    return { url, previewUrl };
});
exports.Upload = Upload;
//# sourceMappingURL=Upload.js.map