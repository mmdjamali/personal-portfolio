import { env } from "@/env"
import { createClient } from "@supabase/supabase-js"

export const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_KEY, {
    global: {
        fetch
    }
})