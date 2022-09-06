import mongoose from "mongoose";


const ComserviceSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        emum:['email','call','message','whatsaap'],
        required:true
    },
    apikey:{
        type:String,
        required:true
    },
    baseurl:{
        type:String,
    },
    status:{
        type:String,
        default:true
    }
})

export default mongoose.model('Comservice',ComserviceSchema);