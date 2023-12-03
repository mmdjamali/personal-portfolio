import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
    server: {
        MONGO_URL: z.string().url(),
    },
    client: {
        NEXT_PUBLIC_BACKEND_URL: z.string()
    },
    runtimeEnv: {
        MONGO_URL: process.env.MONGO_URL,
        NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL
    }
})