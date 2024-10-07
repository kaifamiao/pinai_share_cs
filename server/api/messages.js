import { getDb } from '../utils/db'
import { useMessageStore } from '~/stores/messageStore.ts'

export default defineEventHandler(async (event) => {
    const db = await getDb()
    const messages = await db.get('SELECT * FROM message_store')
    console.log("query data...")
    console.log(messages)
    return JSON.stringify(messages)
})
