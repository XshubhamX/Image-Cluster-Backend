import { allSearch } from "../../helper/allSearch";
import { illustrationSearch } from "../../helper/illustrationSearch";
import { imageSearch } from "../../helper/imageSearch";
import { Search_Data, Search_Filters } from "../../Config/TypeDefs";

export const search = async (
  parent,
  args: Search_Filters
): Promise<Search_Data> => {
  let elements: Search_Data;

  if (!args.key.length) {
    return {
      payload: null,
      error: {
        message: "empty string",
        subject: "string empty",
      },
    };
  }
  switch (args.field) {
    case "image":
      elements = await imageSearch(args.key);
      break;
    case "illustration":
      elements = await illustrationSearch(args.key);
      break;
    default:
      elements = await allSearch(args.key);
  }

  return elements;
};
