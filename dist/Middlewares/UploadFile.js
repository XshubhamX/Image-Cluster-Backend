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
exports.UploadFile = void 0;
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const s3 = new aws_sdk_1.default.S3({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_KEY
});
const UploadFile = (parent, args, context, info) => __awaiter(void 0, void 0, void 0, function* () {
    const { createReadStream, filename } = yield args.file;
    let fileStream = createReadStream();
    const params = {
        Bucket: process.env.DESTINATION_BUCKET_NAME,
        Key: filename,
        Body: fileStream
    };
    yield s3.upload(params, (err, data) => {
        console.log(err, data);
    });
    return {
        filename: null,
        mimetype: null,
        encoding: null,
        url: "",
        error: null
    };
});
exports.UploadFile = UploadFile;
//# sourceMappingURL=UploadFile.js.map