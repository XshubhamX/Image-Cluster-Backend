import IllustrationKeyword from "../Model/IllustrationKeyword"
import { Search_Data } from "../Config/TypeDefs"

export const illustrationSearch = async (key): Promise<Search_Data> => {
    let elements = []
    try {
        elements = await IllustrationKeyword.find({
            subject: {
                $regex: new RegExp(key),
            },
        }).select("type")

    } catch (e) {
        return {
            payload: null,
            error:
            {
                subject: "Query Text",
                message: e
            }
        }
    }

    if (!elements.length) {
        return {
            payload: null,
            error:
            {
                subject: "Query Text",
                message: "No files"
            }
        }
    }

    return {
        payload: elements,
        error: null
    }
}