import { search } from "./Query/search";
import { allImages } from "./Query/getImages";
import { allIllustrations } from "./Query/getIllustrations";
import { getAll } from "./Query/getAll";
import { fileFromKeyword } from "./Query/fileFromKeywords";

const Query = {
  Project: () => {
    return "KPMG Image Cluster";
  },
  search,
  allImages,
  allIllustrations,
  fileFromKeyword,
  getAll,
};

export { Query as default };
