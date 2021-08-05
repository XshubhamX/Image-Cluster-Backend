import AWS from "aws-sdk"
import shortid from "shortid"
import { File } from "../Config/TypeDefs"

const s3 = new AWS.S3({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_KEY
})

export const Upload = async (file: File) => {
    const { createReadStream, filename } = await file
    let fileStream = createReadStream();

    const key: string = `${shortid.generate()}-${filename}`

    const params = {
        Bucket: process.env.DESTINATION_BUCKET_NAME,
        Key: key,
        Body: fileStream
    }
    let url;

    await s3.upload(params, (err, data) => {
        console.log(data)
    })

    return url
}