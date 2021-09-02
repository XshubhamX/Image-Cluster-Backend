import ImageKey from "../../Model/ImageKeyword";
import Image from "../../Model/Images";
import IllustrationKey from "../../Model/IllustrationKeyword";
import Illustration from "../../Model/Illustration";
import AllKeyword from "../../Model/AllKeywords";
import AllFiles from "../../Model/AllFiles";
import {
  Search_Filters,
  File_Return_Data,
  File_Set,
  Store_Files_Acc_Key,
} from "../../Config/TypeDefs";

export const fileFromKeyword = async (
  parent,
  args: Search_Filters
): Promise<File_Return_Data> => {
  let elements: File_Set[] = null;
  let key_present: Store_Files_Acc_Key[] = null;
  let Without_key: File_Set[] = null;

  switch (args.field) {
    case "image":
      if (!args.key || !args.key.length) {
        console.log(args.field);
        Without_key = await Image.find();
        return {
          files: Without_key,
          error: null,
        };
      } else {
        key_present = await ImageKey.find({ type: args.key });
      }
      break;
    case "illustration":
      if (!args.key || !args.key.length) {
        Without_key = await Illustration.find();
        return {
          files: Without_key,
          error: null,
        };
      } else {
        key_present = await IllustrationKey.find({ type: args.key });
      }
      break;
    default:
      if (!args.key || !args.key.length) {
        Without_key = await AllFiles.find();
        return {
          files: Without_key,
          error: null,
        };
      } else {
        key_present = await AllKeyword.find({ type: args.key });
        break;
      }
  }

  if (!key_present[0]) {
    return {
      files: null,
      error: {
        subject: "Keyword",
        message: "No image with the keyword",
      },
    };
  }
  elements = key_present[0].data.map((x) => {
    return { file: x[0], preview: x[1] };
  });

  return {
    files: elements,
    error: null,
  };
};
