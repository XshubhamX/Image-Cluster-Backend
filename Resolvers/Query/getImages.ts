import Image from "../../Model/Images"
import { Get_Args, Image_Data, Image_Return_Data } from "../../Config/TypeDefs"

export const allImages = async (parent, args: Get_Args, context, info): Promise<Image_Return_Data> => {

    let images: Image_Data[];
    try {
        images = await Image.find(null, null, {
            skip: args.skip,
            limit: args.limit,
        });

        if (images.length === 0) {
            return {
                images: null,
                error: {
                    subject: "No More images",
                    message: "No more images"
                }
            }
        }

        return {
            images,
            error: null,
        }
    } catch (e) {
        return {
            images: null,
            error: {
                subject: "error",
                message: "e"
            }
        }
    }
}