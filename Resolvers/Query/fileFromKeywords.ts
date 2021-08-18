import Image from "../../Model/ImageKeyword"
import Illustration from "../../Model/IllustrationKeyword"
import { Search_Filters, File_Return_Data, File_Set, Store_Files_Acc_Key } from "../../Config/TypeDefs"

export const fileFromKeyword = async (parent, args: Search_Filters): Promise<File_Return_Data> => {

    let elements: File_Set[] = null
    let key_present: Store_Files_Acc_Key[] = null

    switch (args.field) {
        case ("image"):
            key_present = await Image.find({ type: args.key })
            break
        case ("illustration"):
            key_present = await Illustration.find({ type: args.key })
            break
        default:
            break
    }

    if (!key_present[0]) {
        return {
            files: null,
            error: {
                subject: "Keyword",
                message: "No image with the keyword"
            }
        }
    }
    elements = key_present[0].data.map(x => {
        return { file: x[0], preview: x[1] }
    })

    return {
        files: elements,
        error: null
    }

}