const AWS = require('aws-sdk')
const fs = require('fs')
const dotenv = require("dotenv")
dotenv.config()

export const download = (req, res, next) => {

    var s3 = new AWS.S3({
        accessKeyId: "AKIAWK3WWXXLPD653VWT",
        secretAccessKey: "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",
    })

    const Key = req.body.key.split("eduyear-website-assets.s3.amazonaws.com/")[1]

    const params = {
        Key,
        Bucket: "eduyear-website-assets"
    }

    const file = Key.split("uploads")[1]

    s3.getObject(params, async (err, data) => {
        if (err) {
            throw err
        }
        await fs.writeFileSync(`.${file}`, data.Body)
        console.log('file downloaded successfully')
        res.download(`.${file}`)
    })


}

// var express = require('express');
// var router = express.Router();



// router.get('/:id/download', function (req, res, next) {
//     var filePath = "/my/file/path/..."; // Or format the path using the `id` rest param
//     var fileName = "report.pdf"; // The default name the browser will use

//     res.download(filePath, fileName);
// });