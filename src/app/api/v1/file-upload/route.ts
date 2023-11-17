import { connectDB } from "@/lib/connect-db";
import { supabase } from "@/lib/supabase"
import { joinStrings, turnFileIntoBase64 } from "@/lib/utils"
import { fileModel } from "@/models/file";
import { FileModelType } from "@/types/models";
import { NextRequest, NextResponse } from "next/server"

function getFileExtension(filename: string) {
    return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
}

const POST = async (req: NextRequest) => {
    const formData = await req.formData()
    const file = formData.get("file") as File | null

    if (!file) return NextResponse.json({
        message: "Fail"
    })

    await connectDB()

    const base64 = Buffer.from(await file.arrayBuffer()).toString("base64")

    const result = await fileModel.create({
        file: base64
    })

    return NextResponse.json({
        message: "Done"
    })
}

export {
    POST
}