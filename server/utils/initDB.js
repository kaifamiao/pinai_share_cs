// server/utils/initDB.js
import { getDBConnection } from './db'

const initDB = async () => {
    const db = await getDBConnection()

    // 创建表并插入初始数据
    await db.exec(`
        CREATE TABLE IF NOT EXISTS select_states (
                                                     id INTEGER PRIMARY KEY,
                                                     list_two_value TEXT
        );
    `)

    // 插入初始数据（如果没有记录）
    await db.run('INSERT OR IGNORE INTO select_states (id, list_two_value) VALUES (1, "a")')
}

initDB()
