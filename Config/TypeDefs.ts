import { Stream } from "stream"

export type Error = {
    subject: string,
    message: string
}

export type Response = {
    success: Boolean,
    error: Error
}

export type File = {
    filename: string;
    mimetype: string;
    encoding: string;
    createReadStream: () => Stream;
}

export type Upload_Data = {
    type: string
    keywords: [string]
    file: File
}

export type Uploaded_File_Response = {
    key: string
    error: Error
}

export type File_Model = {
    data: [string]
    save: () => {}
}

export type uploaded_file_response = {
    key: String,
    error: Error
}
