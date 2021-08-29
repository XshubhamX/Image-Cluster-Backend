import { search } from "./Query/search";
import { allImages } from "./Query/getImages";
import { allIllustrations } from "./Query/getIllustrations";
import { fileFromKeyword } from "./Query/fileFromKeywords";

const Query = {
  Project: () => {
    return "KPMG Image Cluster";
  },
  search,
  allImages,
  allIllustrations,
  fileFromKeyword,
};

export { Query as default };
