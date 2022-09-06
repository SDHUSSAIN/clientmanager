import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    type:{
        type:String,
        enum:['Product','Service'],
        required:true
    },
    baseprice:{
        type:Number,
        required:true
    },
    
    balance:{
        type:Number
    },
    customers:[String],
    saleQty:[Number]
    
})

export default mongoose.model('Item',ItemSchema);