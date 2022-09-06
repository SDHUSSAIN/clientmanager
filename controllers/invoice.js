import Invoice from "../models/Invoice.js"
import Header from "../models/Header.js"
import Customer from "../models/Customer.js"
import mongoose from "mongoose";


//Create new Item
export const createInvoice = async(req,res) => {
    const newInvoice = new Invoice(req.body);
    
    const header = await Header.findById(mongoose.Types.ObjectId.createFromHexString(req.body.headerid));
    const customer = await Customer.findById(mongoose.Types.ObjectId.createFromHexString(req.body.customername));
    
    
   try{
       const savedInvoice = await newInvoice.save();
       
       await header.updateOne({$push:{invoiceid:savedInvoice._id}});
       await customer.updateOne({$push:{invoices:savedInvoice._id}});
       
        res.status(200).json(savedInvoice);
   }catch(error){
    res.status(500).json(error);
   }
}


//Update Invoice
export const updateInvoice = async(req,res) =>{
    try{
        const updatedInvoice = await Invoice.findByIdAndUpdate(req.params.id,{$set:{paymentdetails:req.body.paymentDetails,status:req.body.status}});
         res.status(200).json(updatedInvoice);
    }catch(error){
     res.status(500).json(error);
    }

}

//Delete Invoice
export const deleteInvoice = async(req,res) =>{
    try{
        await Invoice.findByIdAndDelete(req.params.id);
         res.status(200).json("Invoice deleted successfully");
    }catch(error){
     res.status(500).json(error);
    }

}

//Get Invoice
export const getInvoice = async(req,res) =>{
    
    try{
        const invoice = await Invoice.findById(req.params.id);
        const customer = await Customer.findById(mongoose.Types.ObjectId.createFromHexString(invoice.customername));
        const header = await Header.findById(mongoose.Types.ObjectId.createFromHexString(invoice.headerid))
         res.status(200).json({invoice:invoice,customer:customer.name,header:header.title});
    }catch(error){
     res.status(500).json(error);
    }

}

//Get all Invoices
export const getInvoices = async(req,res) =>{
    try{
        if(Object.keys(req.query).length===0){
            const Invoices = await Invoice.find();
            const customers = await Promise.all(
                Invoices.map((invoice)=>{
                 return Customer.findById(mongoose.Types.ObjectId.createFromHexString(invoice.customername));
                 
                })
            );
            const headers = await Promise.all(
                Invoices.map((invoice)=>{
                    return Header.findById(mongoose.Types.ObjectId.createFromHexString(invoice.headerid));
                   
                })
            )
            
            res.status(200).json({a:Invoices,b:customers,c:headers});
        }else{
            const Invoices = await Invoice.find(req.query)
            res.status(200).json(Invoices);
        }  
    }catch(error){
     res.status(500).json(error);
    }
}