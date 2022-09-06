import mongoose from "mongoose";


const InvoiceSchema = new mongoose.Schema({
    no:{
        type:Number,
        unique:true,
    },
    invoiceserial:{
        type:String,
        required:true
    },
    headerid:{
        type:String,
        required:true,
    },
    issueddate:{
        type:Date,
        default:Date.now(),
        required:true
    },
    duedate:{
        type:Date,
        default:Date.now(),
        required:true

    },
    customername:{
        type:String,
        required:true,
    },
    
    items:[
        {
         name:{
            type:String,
            required:true
         },
         price:{
            type:Number,
            required:true
         } ,
         qty:{
            type:Number,
            required:true
         } ,
         taxrate:{
            type:Number,
         } ,
         discountrate:{
            type:Number,
         }   
        }
    ],
    
    grandtotal:{
        type:Number
    },
    totaligst:{
        type:Number
    },
    totalcgst:{
        type:Number
    },
    totalsgst:{
        type:Number
    },

    discounttotal:{
        type:Number
    },
    nettotal:{
        type:Number
    },
    paymentdetails:{
        bankname: {
            type:String,
            default:""
        },
        dop: {
            type:String,
            default:""
            
        },
        naration: {
            type:String,
            default:""
            
        },
        paidamt: {
            type:String,
            default:0
            
        },
        paymentdiscount: {
            type:String,
            default:0
            
        },
        paymentmethod: {
            type:String,
            default:""
            
        },
        pendingamt: {
            type:String,
            default:0
            
        },
        trax: {
            type:String,
            default:""
            
        },
        traxfees: {
            type:String,
            default:0
            
        },
    },
    
    status:{
        type:String,
        default:"Draft"
    },
    notes:{
        type:String,
    }


},{
    timestamps:true
})

export default mongoose.model('Invoice',InvoiceSchema);