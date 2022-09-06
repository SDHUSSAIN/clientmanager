import Customer from "../models/Customer.js"
import Invoice from "../models/Invoice.js"
import mongoose from "mongoose";


//Create new customer
export const createCustomer = async(req,res) => {
    const newCustomer = new Customer(req.body);
   try{
       const savedCustomer = await newCustomer.save();
        res.status(200).json(savedCustomer);
   }catch(error){
    res.status(500).json(error);
   }
}

//Upload customers

export const uploadCustomers = (req,res) => {
    const newCustomers = req.body ;
       newCustomers.forEach(async(customer) => {
            const {id,...fieldcustomer} = customer ;
            const newcustomer = new Customer(fieldcustomer) ;
            try{
                const savedcustomer = await newcustomer.save();
                res.status(200).json(savedcustomer);
            }catch(error){
                res.status(500).json(error);
            }
        });
}

//Update customer
export const updateCustomer = async(req,res) =>{
    try{
        const updatedCustomer = await Customer.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
         res.status(200).json(updatedCustomer);
    }catch(error){
     res.status(500).json(error);
    }

}

//Delete customer
export const deleteCustomer = async(req,res) =>{
    try{
        await Customer.findByIdAndDelete(req.params.id);
         res.status(200).json("Customer deleted successfully");
    }catch(error){
     res.status(500).json(error);
    }

}

//Get customer
export const getCustomer = async(req,res) =>{
    
    try{
        
       
        const customer = await Customer.findById(req.params.id);
        
        if(customer.invoices.length >0){
            const invoices = await Promise.all(
                customer.invoices.map((invoice)=>{
                    return Invoice.findById(mongoose.Types.ObjectId.createFromHexString(invoice));
                      
                })
            );
            res.status(200).json({customer,invoices});
        }else{
            res.status(200).json(customer);
        }
        
        

    }catch(error){
     res.status(500).json(error);
    }

}

//Get all customers
export const getCustomers = async(req,res) =>{

    try{
        if(Object.keys(req.query).length===0){
            const Customers = await Customer.find();
            res.status(200).json(Customers);
        }else{
            const Customers = await Customer.find(req.query);
            res.status(200).json(Customers);
        }
        
    }catch(error){
     res.status(500).json(error);
    }
}

// export const countByCity = async(req,res)=>{
//     try{
//         const cities = req.query.cities.split(",");
//         const list = await Promise.all(cities.map(city=>{
//             return Hotel.countDocuments({city:city});
//         }))
//         res.status(200).json(list);
//     }catch(error){
//         res.status(500).json(error);
//     }
// }

