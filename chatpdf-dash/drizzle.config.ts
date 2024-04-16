// Drizzle-Kit
import type {Config} from 'drizzle-kit'
//dotEnv
import * as dotenv from 'dotenv'
dotenv.config({ path: '.env' })


export default {
    driver: 'pg',
    schema: './src/lib/db/schema.ts',
    dbCredentials: {
        connectionString: process.env.DATABASE_URL!,
    }
} satisfies Config;

// npx drizzle-kit push:pg  
// ^^  -> Makes Sure Neon DB is Synced up with Schema

