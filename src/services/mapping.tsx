import { DocumentPickerResponse } from "react-native-document-picker";
import { Book, File } from "../types";
import { convertStringToFileType } from "./ConversionService";

export function mapDocumentPickerToFileCache(response: DocumentPickerResponse): File
{
    return { path: response.fileCopyUri, name: response.name, type: response.type } as File
}

export function mapFileCacheToBook(cache: File): Book
{
    return { title: cache.name ? cache.name : '', path: cache.path, fileType: convertStringToFileType(cache.type) }
}