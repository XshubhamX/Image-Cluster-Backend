import VectorKeyword from "../Model/VectorGraphicsKeyword";
import Vector from "../Model/VectorGraphics";
import { File_Model } from "../Config/TypeDefs";
import TotalCount from "../Model/TotalCount";
import { keyword } from "chalk";

export const saveVector = async (url, keywords) => {
  let n = keywords.length;

  try {
    for (let i = 0; i < n; i++) {
      const foundKey: File_Model = await VectorKeyword.findOne({
        type: keyword[i],
      });
      if (foundKey) {
        foundKey.data.push(url);
        await foundKey.save();
      } else {
        const newKey: any = new VectorKeyword({
          type: keywords[i],
          data: [],
        });
        newKey.data.push(url);

        await newKey.save();
      }
    }

    const newVector = new Vector({
      file: url,
    });

    await newVector.save();

    let countObject: any = await TotalCount.findOne({ type: "vector" });
    if (countObject) {
      const c = countObject.count + 1;
      countObject.count = c;
      await countObject.save();
    } else {
      countObject = new TotalCount({
        type: "vector",
        count: 1,
      });

      await countObject.save();
    }

    return { key: countObject.id, error: null };
  } catch (e) {
    console.log(e);
    return {
      key: null,
      error: {
        subject: "Error",
        message: e,
      },
    };
  }
};
