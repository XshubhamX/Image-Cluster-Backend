import { NumberOfHumanWorkersPerDataObject } from "aws-sdk/clients/sagemaker";
import { Stream } from "stream";

export type Error = {
  subject: string;
  message: string;
};

export type Response = {
  success: Boolean;
  error: Error;
};

export type File = {
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream: () => Stream;
};

export type Upload_Data = {
  type: string;
  keywords: [string];
  file: File;
  preview: File;
};

export type Uploaded_File_Response = {
  key: string;
  error: Error;
};

export type File_Model = {
  data: [[string, string]];
  save: () => {};
};

export type uploaded_file_response = {
  key: String;
  error: Error;
};

export type s3_data = {
  Location: string;
};

export type Get_Args = {
  skip: number;
  limit: number;
};

export type Image_Data = {
  file: string;
  preview: string;
};

export type Illustration_Data = {
  file: string;
  preview: string;
};

export type Image_Return_Data = {
  images: Image_Data[];
  error: Error;
};
export type ALL_Return_Data = {
  all: Image_Data[];
  error: Error;
};

export type Illustration_Return_Data = {
  illus: Illustration_Data[];
  error: Error;
};

export type Id_KeyMap = {
  id: string;
  type: string;
};

export type Search_Data = {
  payload: string[];
  error: Error;
};

export type Search_Filters = {
  field: string;
  key: string;
};

export type File_Set = {
  file: String;
  preview: String;
};

export type File_Return_Data = {
  files: File_Set[];
  error: Error;
};

export type File_Arr = [string, string];

export type Store_Files_Acc_Key = {
  data: File_Arr[];
};
