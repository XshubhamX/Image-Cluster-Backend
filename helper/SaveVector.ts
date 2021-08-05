import Illustaration from "../Model/Illustration"
import { File_Model } from "../Config/TypeDefs"
import TotalCount from "../Model/TotalCount"

export const saveVector = async (url, keywords) => {

    let n = keywords.length
    try {

        for (let i = 0; i < n; i++) {
            const foundKey: File_Model = await Illustaration.findById(keywords[i])
            if (foundKey) {
                foundKey.data.push(url)
                await foundKey.save()
            }
            else {
                const newKey: any = new Illustaration({
                    _id: keywords[i],
                    data: [url]
                })

                await newKey.save()
            }
        }

        let countObject: any = await TotalCount.findOne({ type: "vector" })
        if (countObject) {
            const c = countObject.count + 1
            countObject.count = c
            await countObject.save()
        }
        else {
            countObject = new TotalCount({
                type: 'vector',
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