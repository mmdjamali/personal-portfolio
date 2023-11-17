import { clsx, type ClassArray } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs: ClassArray) => twMerge(clsx(inputs))

export const joinStrings = (...inputs: string[]) => inputs.join("")

export const turnFileIntoBase64: (file: File) => Promise<string> = async (file) => {
    return await new Promise((resolve) => {
        const fileReader = new FileReader()

        fileReader.onload = () => {
            resolve(fileReader.result?.toString() ?? "")
        }

        fileReader.readAsDataURL(file)
    })
}