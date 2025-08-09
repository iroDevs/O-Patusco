import { z } from 'zod';
import { config } from 'dotenv'
config()

const envSchema = z.object({
    DATABASE_URL: z.string().min(1, "DATABASE_URL is required"),
    PORT: z.coerce.number(),
    NODE_ENV: z.enum(["development","release","production"]).default("development"),
    JWT_SECRET: z.string().min(1, "JWT_SECRET is required"),
})

const result = envSchema.safeParse(process.env)

if (!result.success) {
    console.error("Invalid environment variables:", result.error.format())
    process.exit(1)
}

export default result.data