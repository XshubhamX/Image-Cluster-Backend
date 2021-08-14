import { search } from "./Query/search"
import { allImages } from "./Query/getImages"
import { allIllustrations } from "./Query/getIllustrations"

const Query = {
    Project: () => {
        return "KPMG Image Cluster"
    },
    search,
    allImages,
    allIllustrations
}

export { Query as default }