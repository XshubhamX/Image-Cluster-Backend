import IllustrationKeyword from "../Model/IllustrationKeyword";
import Illustration from "../Model/Illustration";
import { File_Model } from "../Config/TypeDefs";
import AllFiles from "../Model/AllFiles";
import KeyWord from "../Model/AllKeywords";

export const saveIllustration = async (
  url: string,
  keywords: string[],
  previewUrl: string
) => {
  let n = keywords.length;

  try {
    for (let i = 0; i < n; i++) {
      let x = keywords[i].toLowerCase();
      keywords[i] = x;
      const keyWordPresent = await KeyWord.findOne({ type: keywords[i] });
      if (!keyWordPresent) {
        const newKeyWord = new KeyWord({
          type: keywords[i],
          data: [],
        });
        newKeyWord.data.push([url, previewUrl]);
        await newKeyWord.save();

        const newKey: File_Model = new IllustrationKeyword({
          type: keywords[i],
          data: [],
        });
        newKey.data.push([url, previewUrl]);

        await newKey.save();
      } else {
        keyWordPresent.data.push([url, previewUrl]);
        await keyWordPresent.save();
        const foundKey: File_Model = await IllustrationKeyword.findOne({
          type: keywords[i],
        });
        if (foundKey) {
          foundKey.data.push([url, previewUrl]);
          await foundKey.save();
        } else {
          const newKey: File_Model = new IllustrationKeyword({
            type: keywords[i],
            data: [],
          });
          newKey.data.push([url, previewUrl]);

          await newKey.save();
        }
      }
    }

    const newIllustration = new Illustration({
      file: url,
      preview: previewUrl,
    });

    await newIllustration.save();

    const add_new_file = new AllFiles({
      file: url,
      preview: previewUrl,
    });

    await add_new_file.save();

    return { key: add_new_file.id, error: null };
  } catch (e) {
    return {
      key: null,
      error: {
        subject: "Error",
        message: e,
      },
    };
  }
};
