import db from "./data.js";

db.prepare(
    "CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, price NUMBER, amount NUMBER)"
).run();

export const getAllProducts = () => db.prepare(SELECT * FROM products).all(); 

export const postProduct = () => db.

export const putProduct = () => db.