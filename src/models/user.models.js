import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
        index:true
    },
    username: {
        type:String,
        required: true,
        unique:true,
        lowercase:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true
    },
    refreshToken:{
        type:String
    }
}, {timestamps:true})

export const User = mongoose.model("User", userSchema)