import shortid from "shortid";
import { File } from "../Config/TypeDefs";
import cloudinary from "cloudinary";

export const Upload = async (file: File, preview: File) => {
  let { createReadStream, filename } = await file;
  let fileStream = createReadStream();
  let url, previewUrl;

  cloudinary.v2.config({
    cloud_name: "https-fstock-vercel-app",
    api_key: "583559134152936",
    api_secret: "fLoJI_6_LlQNAGU-MegBngFoGxc",
  });

  try {
    const result: any = await new Promise((resolve, reject) => {
      fileStream.pipe(
        cloudinary.v2.uploader.upload_stream((error, result) => {
          if (error) {
            reject(error);
          }

          resolve(result);
        })
      );
    });
    //@ts-ignore
    url = `https://res.cloudinary.com/https-fstock-vercel-app/image/upload/fl_attachment/${result.public_id}.${result.format}`;
  } catch (error) {
    console.log(error);
  }

  if (preview) {
    let { createReadStream, filename } = await preview;
    let fileStream = createReadStream();
    try {
      const result = await new Promise((resolve, reject) => {
        fileStream.pipe(
          cloudinary.v2.uploader.upload_stream((error, result) => {
            if (error) {
              reject(error);
            }

            resolve(result);
          })
        );
      });
      //@ts-ignore
      previewUrl = result.secure_url;
    } catch (error) {
      console.log(error);
    }
  }

  return { url, previewUrl };
};
