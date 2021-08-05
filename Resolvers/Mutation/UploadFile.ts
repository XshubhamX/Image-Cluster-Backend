import { Upload_Data, Uploaded_File_Response } from "../../Config/TypeDefs"
import { Upload } from "../../helper/Upload"
import { saveInDatabase } from "../../helper/SaveInDatabase"

export const UploadFile = async (parent, args: Upload_Data, context, info): Promise<Uploaded_File_Response> => {

    const Url = await Upload(args.file)

    const { key, error } = await saveInDatabase(args.type, Url, args.keywords)

    return {
        key,
        error
    }
}