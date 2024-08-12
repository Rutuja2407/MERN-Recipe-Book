import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    gmail:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
 
})

//export these data type created
export const User = mongoose.model("User",userSchema)