import { timestamp } from 'drizzle-orm/mysql-core'
import {pgTable} from 'drizzle-orm/pg-core'

export const chats = pgTable('chats', {
    id: serial('id').primaryKey(),
    pdfName: text('pdf_name').notNull(),
    pdfUrl: text('pdf_url').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
})

