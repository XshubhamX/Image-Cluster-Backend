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
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const shortid_1 = __importDefault(require("shortid"));
const s3 = new aws_sdk_1.default.S3({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_KEY
});
const Upload = (file) => __awaiter(void 0, void 0, void 0, function* () {
    const { createReadStream, filename } = yield file;
    let fileStream = createReadStream();
    const key = `${shortid_1.default.generate()}-${filename}`;
    const params = {
        Bucket: process.env.DESTINATION_BUCKET_NAME,
        Key: key,
        Body: fileStream
    };
    let url;
    yield s3.upload(params, (err, data) => {
        console.log(data);
    });
    return url;
});
exports.Upload = Upload;
//# sourceMappingURL=Upload.js.map