import mongoose  from "mongoose";

const CustomerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
    pincode:{
        type:Number,
        required:true,
    }, 
    gstno:{
        type:String,
        required:true,
        minlength:14,
        maxlength:14
    },
    panno:{
        type:String,
        required:true,
        minlength:10,
        maxlenght:10
    },
    contactpersonname:{
        type:String,
        required:true
    },
    contactpersonnumber:{
        type:String,
        required:true
    },   
    invoices:{
        type:[String],
    },
    comservice:{
        type:[String],
        required:true
    },
    status:{
        type:Boolean,
        default:true
    }
});

export default mongoose.model("Customer", CustomerSchema);