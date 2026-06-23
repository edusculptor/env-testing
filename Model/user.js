import mongoose from "mongoose"
const userScheme = new mongoose.Schema({
    Name:String,
    Email:{
        
    },
    Contact:Number,
    Password:String
})

const User = mongoose.model('User',userScheme)