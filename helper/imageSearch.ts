import ImageKeyword from "../Model/ImageKeyword"
import { Search_Data } from "../Config/TypeDefs"

export const imageSearch = async (key): Promise<Search_Data> => {
    let elements = []
    try {
        elements = await ImageKeyword.find({
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