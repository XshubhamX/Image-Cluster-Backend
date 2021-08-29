import IllustrationKeyword from "../Model/IllustrationKeyword";
import trimmer from "trimmer";
import { Search_Data, Id_KeyMap } from "../Config/TypeDefs";

export const illustrationSearch = async (key: string): Promise<Search_Data> => {
  let elements: [Id_KeyMap];
  key = key.toLowerCase();
  key = trimmer.left(key);
  key = trimmer.right(key);
  try {
    elements = await IllustrationKeyword.find({
      type: {
        $regex: new RegExp(key),
      },
    }).select("type");
  } catch (e) {
    return {
      payload: null,
      error: {
        subject: "Query Text",
        message: e,
      },
    };
  }

  if (!elements.length) {
    return {
      payload: null,
      error: {
        subject: "Query Text",
        message: "No files",
      },
    };
  }
  let elems: string[] = elements.map((e) => e.type);
  return {
    payload: elems,
    error: null,
  };
};
