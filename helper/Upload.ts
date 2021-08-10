import AWS from "aws-sdk"
import shortid from "shortid"
import { File } from "../Config/TypeDefs"
import { promisify } from 'util'


var s3 = new AWS.S3({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_KEY,
    // region: process.env.REGION
});

promisify(s3.upload).bind(s3);

export const Upload = async (file: File, preview: File) => {
    let { createReadStream, filename } = await file
    let fileStream = createReadStream();

    let key: string = `/uploads/${shortid.generate()}-${filename}`

    let params = {
        Bucket: process.env.DESTINATION_BUCKET_NAME,
        Key: key,
        Body: fileStream
    }
    let url = `https://kpmgimagecluster.s3.ap-south-1.amazonaws.com/${key}`;

    await s3.upload(params, (err, data) => {
        url = data.Location
        console.log(data.Location)
    })

    if (preview) {
        let { createReadStream, filename } = await file
        fileStream = createReadStream();

        key = `${shortid.generate()}-${filename}`

        params = {
            Bucket: process.env.DESTINATION_BUCKET_NAME,
            Key: key,
            Body: fileStream
        }

        await s3.upload(params, (err, data) => {
            url = data.Location
            console.log(data.Location)
        })
    }


    return { url: "1", previewUrl: "1" }
}