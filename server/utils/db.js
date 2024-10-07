// server/utils/db.js
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

// 创建或打开 SQLite 数据库
export const getDb = async () => {
    return open({
        filename: './db_v3.db',
        driver: sqlite3.Database
    })
}
