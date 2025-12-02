import express from "express";
import productRoutes from "./routers/productRoutes";

const PORT = 3311;

const app = express();

app.use(express.json());

app.listen(PORT, () =>{
    console.log("Server is running on PORT:3311!")
})