import ImageKeyword from "../Model/ImageKeyword"
import { Search_Data, Id_KeyMap } from "../Config/TypeDefs"

export const imageSearch = async (key): Promise<Search_Data> => {
    let elements: [Id_KeyMap]
    try {
        let x = new RegExp(key)
        console.log(x)
        elements = await ImageKeyword.find({
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