import mongoose from "mongoose";


const HeaderSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    cinno:{
        type:String,
        
    },
    gstno:{
        type:String,
        
    },
    panno:{
        type:String,
    },
    contactno:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    invoiceprefix:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true
    },
    bankname:{
        type:String,
        required:true,
    },
    bankaccount:{
        type:String,
        required:true
    },
    ifsccode:{
        type:String,
        required:true
    },

    invoiceid:{type:[String]},
    invoiceno:{type:[String]}
},
)


export default mongoose.model("Header", HeaderSchema);