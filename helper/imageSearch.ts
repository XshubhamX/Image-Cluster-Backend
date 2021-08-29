import ImageKeyword from "../Model/ImageKeyword";
import trimmer from "trimmer";
import { Search_Data, Id_KeyMap } from "../Config/TypeDefs";

export const imageSearch = async (key: string): Promise<Search_Data> => {
  let elements: [Id_KeyMap];
  key = key.toLowerCase();
  key = trimmer.left(key);
  key = trimmer.right(key);
  if (key === "") {
    return {
      payload: null,
      error: {
        subject: "Keyword",
        message: "No keyword",
      },
    };
  }
  try {
    let x = new RegExp(key);
    elements = await ImageKeyword.find({
      type: {
        $regex: x,
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
  console.log(elems);

  return {
    payload: elems,
    error: null,
  };
};
