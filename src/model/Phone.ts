import { v4 } from "uuid";
import { getConnection } from "../server/db";

export const all = async () => {
    const phones = await getConnection().get("phones").value();
    return { phones, count: phones.length };
}

export const count = async () => {
    const phones = await getConnection().get("phones").value()
    return phones.length;
}

export const findByID = async (id: string) => {
    const phone = await getConnection().get("phones").find({ id }).value()
    return phone;
}

export const create = async (model: string, description: string) => {
    const newPhone = {
        id: v4(),
        model,
        description
    };

    const db = await getConnection();
    await db.get("phones").push(newPhone).write();

    return newPhone.id;
};

export const update = async(id: string, model:string, description:string) => {
    const db = await getConnection();
    const phone = await db.get("phones").find({ id }).value();

    if (!phone) return;

    await db.get("phones").find({ id }).assign({ model, description }).write();

    return id;

};


export const remove = async(id: string) => {
    const db = await getConnection();

    const phone = await db.get("phones").find({ id }).value();

    if (!phone) return;

    await db.get("phones").remove({ id }).write();

    return id;
}




