import e from "express";
import mongoose from "mongoose";
import dns from "node:dns";
import dotenv from 'dotenv'
dns.setServers(['8.8.8.8','0.0.0.0'])
dotenv.config()

const app =e();
const url = process.env.Mongodb

async function database_connection(){
    const tester = await mongoose.connect(url);
    if(tester){
        console.log("connecte to mongo db")
    }
}
database_connection()
const PORT =5000;

app.listen(PORT,()=>{
    console.log("hello everyone")
})