import Mongoose from "mongoose";

const TemplateSchema = new Mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

export default Mongoose.model("Template",TemplateSchema) ;
