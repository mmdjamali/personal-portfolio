import { env } from "@/env"
import mongoose from "mongoose"

const connectDB = async () => {
    if (mongoose.connections[0].readyState === 0) mongoose.connect(env.MONGO_URL)
}

export {
    connectDB
}