import { FileModelType } from "@/types/models"
import mongoose, { Model } from "mongoose"

const fileSchema = new mongoose.Schema({
    file: {
        require: true,
        type: String
    }
})

type SchemaType = typeof fileSchema

export const fileModel = mongoose.models.file as Model<Omit<FileModelType, "id">, SchemaType> || mongoose.model("file", fileSchema)

