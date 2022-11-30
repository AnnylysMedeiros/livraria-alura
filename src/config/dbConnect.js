import mongoose from "mongoose";

mongoose.connect("mongodb+srv://user01:123@cluster0.v1zn6ir.mongodb.net/alura-nodejs");

let db = mongoose.connection;

export default db; 