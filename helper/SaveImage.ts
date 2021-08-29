import ImageKeyword from "../Model/ImageKeyword";
import Image from "../Model/Images";
import { File_Model } from "../Config/TypeDefs";
import TotalCount from "../Model/TotalCount";
import keyWord from "../Model/AllKeywords";

export const saveImage = async (url, keywords, previewUrl) => {
  let n = keywords.length;

  try {
    for (let i = 0; i < n; i++) {
      let x = keywords[i].toLowerCase();
      keywords[i] = x;
      const keyWordPresent = await keyWord.findOne({ type: keywords[i] });
      if (!keyWordPresent) {
        const newKeyWord = new keyWord({
          type: keywords[i],
          data: [],
        });
        console.log([url, previewUrl]);
        newKeyWord.data.push([url, previewUrl]);
        await newKeyWord.save();

        const newKey: File_Model = new ImageKeyword({
          type: keywords[i],
          data: [],
        });
        newKey.data.push([url, previewUrl]);

        await newKey.save();
      } else {
        keyWordPresent.data.push([url, previewUrl]);
        await keyWordPresent.save();
        const foundKey: File_Model = await ImageKeyword.findOne({
          type: keywords[i],
        });
        if (foundKey) {
          foundKey.data.push([url, previewUrl]);
          await foundKey.save();
        } else {
          const newKey: File_Model = new ImageKeyword({
            type: keywords[i],
            data: [],
          });
          newKey.data.push([url, previewUrl]);

          await newKey.save();
        }
      }
    }

    const newImage = new Image({
      file: url,
      preview: previewUrl,
    });

    await newImage.save();

    let countObject: any = await TotalCount.findOne({ type: "image" });
    if (countObject) {
      const c = countObject.count + 1;
      countObject.count = c;
      await countObject.save();
    } else {
      countObject = new TotalCount({
        type: "image",
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
