import KeyWords from "../Model/AllKeywords"
import { Search_Data, Id_KeyMap } from "../Config/TypeDefs"

export const allSearch = async (key): Promise<Search_Data> => {
    let elements: [Id_KeyMap]
    try {
        elements = await KeyWords.find({
            type: {
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