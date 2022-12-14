import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        min:6
    },
    isAdmin:{
        type:String,
        default:false
    }
},
{
    timestamps:true
})


export default mongoose.model("User", UserSchema);