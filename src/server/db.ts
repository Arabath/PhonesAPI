import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync"

type Phone = {
    model: string,
    description: string
}

type Schema = {
    phones: Phone[]
}


let db: lowdb.LowdbSync<Schema>


export const createConnection = async () => {
    const adapter = new FileSync<Schema>(`${process.env.DB_LOCAL_PATH}`);
    db = lowdb(adapter)
    await db.defaults({ phones: [] }).write()
}

export const getConnection = () => db

export const resetDatabase = () => 
getConnection().get("phones").remove().write()