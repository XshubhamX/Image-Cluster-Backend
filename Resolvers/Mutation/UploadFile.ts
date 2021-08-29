import { Upload_Data, Uploaded_File_Response } from "../../Config/TypeDefs";
import { Upload } from "../../helper/Upload";
import { saveInDatabase } from "../../helper/SaveInDatabase";

export const UploadFile = async (
  parent,
  args: Upload_Data,
  context,
  info
): Promise<Uploaded_File_Response> => {
  if (!args.file && !args.type) {
    return {
      key: null,
      error: {
        subject: "preview",
        message: "Some inputs are missing",
      },
    };
  }
  if (!args.preview && args.type === "illustration") {
    return {
      key: null,
      error: {
        subject: "Preview",
        message: "Illustrations require Preview",
      },
    };
  }

  console.log(args.type);

  const { url, previewUrl } = await Upload(args.file, args.preview);
  const { key, error } = await saveInDatabase(
    args.type,
    url,
    args.keywords,
    previewUrl
  );

  return {
    key,
    error,
  };
};
