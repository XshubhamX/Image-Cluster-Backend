import AllFiles from "../../Model/AllFiles";
import { Get_Args, Image_Data, ALL_Return_Data } from "../../Config/TypeDefs";

export const getAll = async (
  parent,
  args: Get_Args,
  context,
  info
): Promise<ALL_Return_Data> => {
  let all: Image_Data[];
  try {
    all = await AllFiles.find().sort({ datefield: -1 });

    if (all.length === 0) {
      return {
        all: null,
        error: {
          subject: "No More Files",
          message: "No more Files",
        },
      };
    }

    return {
      all,
      error: null,
    };
  } catch (e) {
    return {
      all: null,
      error: {
        subject: "error",
        message: "e",
      },
    };
  }
};
