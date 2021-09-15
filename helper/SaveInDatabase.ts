import { saveImage } from "./SaveImage";
import { saveVector } from "./SaveVector";
import { saveIllustration } from "./SaveIllustrator";
import { Uploaded_File_Response } from "../Config/TypeDefs";

export const saveInDatabase = async (
  type: string,
  url: string,
  keywords: [string],
  previewUrl: string
) => {
  let data: Uploaded_File_Response;
  switch (type) {
    case "image":
      data = await saveImage(url, keywords, previewUrl);
      break;
    case "vector":
      data = await saveVector(url, keywords);
      break;
    default:
      data = await saveIllustration(url, keywords, previewUrl);
  }

  return data;
};
