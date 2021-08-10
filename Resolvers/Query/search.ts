import { allSearch } from "../../helper/allSearch"
import { illustrationSearch } from "../../helper/illustrationSearch"
import { imageSearch } from "../../helper/imageSearch"
import { Search_Data, Search_Filters } from "../../Config/TypeDefs"

export const searchClasses = async (parent, args: Search_Filters) => {

    let elements: Search_Data

    switch (args.field) {
        case ("image"):
            elements = await imageSearch(args.key)
            break
        case ("illustration"):
            elements = await illustrationSearch(args.key)
            break
        default:
            elements = await allSearch(args.key)
    }

    return elements

}