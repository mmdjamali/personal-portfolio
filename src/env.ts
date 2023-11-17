import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
    server: {
        SUPABASE_KEY: z.string(),
        SUPABASE_URL: z.string().url(),
        MONGO_URL: z.string().url(),
    },
    client: {
    },
    runtimeEnv: {
        SUPABASE_KEY: process.env.SUPABASE_KEY,
        SUPABASE_URL: process.env.SUPABASE_URL,
        MONGO_URL: process.env.MONGO_URL,
    }
})