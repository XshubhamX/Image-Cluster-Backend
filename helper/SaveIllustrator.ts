import IllustrationKeyword from "../Model/IllustrationKeyword"
import Illustration from "../Model/IllustrationKeyword"
import { File_Model } from "../Config/TypeDefs"
import TotalCount from "../Model/TotalCount"
import KeyWord from "../Model/AllKeywords"

export const saveIllustration = async (url: string, keywords: string[], previewUrl: string) => {

    let n = keywords.length

    try {
        for (let i = 0; i < n; i++) {
            const keyWordPresent = await KeyWord.find({ type: keywords[i] })
            if (!keyWordPresent) {

                const newKeyWord = new KeyWord({
                    type: keywords[i]
                })
                await newKeyWord.save()

                const newKey: File_Model = new IllustrationKeyword({
                    type: keywords[i],
                    data: []
                })
                newKey.data.push([url, previewUrl])

                await newKey.save()
            }

            else {
                const foundKey: File_Model = await IllustrationKeyword.findOne({ type: keywords[i] })
                if (foundKey) {
                    foundKey.data.push([url, previewUrl])
                    await foundKey.save()
                }
                else {
                    const newKey: File_Model = new IllustrationKeyword({
                        type: keywords[i],
                        data: []
                    })
                    newKey.data.push([url, previewUrl])

                    await newKey.save()
                }
            }

        }

        const newIllustration = new Illustration({
            file: url,
            preview: previewUrl
        })

        await newIllustration.save()

        let countObject: any = await TotalCount.findOne({ type: "illustration" })
        if (countObject) {
            const c = countObject.count + 1
            countObject.count = c
            await countObject.save()
        }
        else {
            countObject = new TotalCount({
                type: 'illustration',
                count: 1
            })

            await countObject.save()
        }

        return { key: countObject.id, error: null }
    } catch (e) {
        console.log(e)
        return {
            key: null, error: {
                subject: "Error",
                message: e
            }
        }
    }



}