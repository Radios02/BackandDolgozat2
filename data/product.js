import db from "./data.js";

db.prepare(
    "CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, price NUMBER, amount NUMBER)"
).run();

export const getAllProducts = () => db.prepare("SELECT * FROM products").all(); 

export const saveProduct = (name, price, amount) => db.prepare("INSERT INTO product (name, price, amount) VALUES(?,?,?)").run(name, price, amount); 

export const updateProduct = (id, name, price, amount) => db.prepare("UPDATE product SET name = ?, price = ?, amount = ? WHERE id=?").run(name, price, amount, id)