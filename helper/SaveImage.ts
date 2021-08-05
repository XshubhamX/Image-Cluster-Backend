import Image from "../Model/Image"
import { File_Model } from "../Config/TypeDefs"
import TotalCount from "../Model/TotalCount"

export const saveImage = async (url, keywords) => {

    let n = keywords.length

    try {
        for (let i = 0; i < n; i++) {
            const foundKey: File_Model = await Image.findById(keywords[i])
            if (foundKey) {
                foundKey.data.push(url)
                await foundKey.save()
            }
            else {
                const newKey: any = new Image({
                    _id: keywords[i],
                    data: [url]
                })

                await newKey.save()
            }
        }

        let countObject: any = await TotalCount.findOne({ type: "image" })
        if (countObject) {
            const c = countObject.count + 1
            countObject.count = c
            await countObject.save()
        }
        else {
            countObject = new TotalCount({
                type: 'image',
                count: 1
            })

            await countObject.save()
        }

        return { key: countObject.id, error: null }
    } catch (e) {
        return {
            key: null, error: {
                subject: "Error",
                message: e
            }
        }
    }



}