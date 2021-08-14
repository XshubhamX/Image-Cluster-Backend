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
exports.download = void 0;
const AWS = require('aws-sdk');
const fs = require('fs');
const dotenv = require("dotenv");
dotenv.config();
const download = (req, res, next) => {
    var s3 = new AWS.S3({
        accessKeyId: "AKIAWK3WWXXLPD653VWT",
        secretAccessKey: "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",
    });
    const Key = req.body.key.split("eduyear-website-assets.s3.amazonaws.com/")[1];
    const params = {
        Key,
        Bucket: "eduyear-website-assets"
    };
    const file = Key.split("uploads")[1];
    s3.getObject(params, (err, data) => __awaiter(void 0, void 0, void 0, function* () {
        if (err) {
            throw err;
        }
        yield fs.writeFileSync(`.${file}`, data.Body);
        console.log('file downloaded successfully');
        res.download(`.${file}`);
    }));
};
exports.download = download;
// var express = require('express');
// var router = express.Router();
// router.get('/:id/download', function (req, res, next) {
//     var filePath = "/my/file/path/..."; // Or format the path using the `id` rest param
//     var fileName = "report.pdf"; // The default name the browser will use
//     res.download(filePath, fileName);
// });
//# sourceMappingURL=download.js.map