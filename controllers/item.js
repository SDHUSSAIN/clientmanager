import Item from "../models/Item.js"


//Create new Item
export const createItem = async(req,res) => {
    const newItem = new Item(req.body);
   try{
       const savedItem = await newItem.save();
        res.status(200).json(savedItem);
   }catch(error){
    res.status(500).json(error);
   }
}
//Upload items

export const uploadItems = (req,res) => {
    const newItems = req.body ;
       newItems.forEach(async(item) => {
            const {id,...fielditem} = item ;
            const newitem = new Item(fielditem) ;
            try{
                const saveditem = await newitem.save();
                res.status(200).json(saveditem);
            }catch(error){
                res.status(500).json(error);
            }
        });
}

//Update Item
export const updateItem = async(req,res) =>{
    try{
        const updatedItem = await Item.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
         res.status(200).json(updatedItem);
    }catch(error){
     res.status(500).json(error);
    }

}

//Delete Item
export const deleteItem = async(req,res) =>{
    try{
        await Item.findByIdAndDelete(req.params.id);
         res.status(200).json("Item deleted successfully");
    }catch(error){
     res.status(500).json(error);
    }

}

//Get Item
export const getItem = async(req,res) =>{
    try{
        const item = await Item.findById(req.params.id);
         res.status(200).json(item);
    }catch(error){
     res.status(500).json(error);
    }

}

//Get all Items
export const getItems = async(req,res) =>{
    try{
        if(Object.keys(req.query).length===0){
            const Items = await Item.find();
            res.status(200).json(Items);
        }else{
            const Items = await Item.find(req.query)
            res.status(200).json(Items);
        }  
    }catch(error){
     res.status(500).json(error);
    }
}

// export const itemType = async(req,res)=>{
//     console.log("itemtype runs")
//     try{
//         const itemtype = req.query.itemtype;
//         console.log(itemType);
//         const itemsByType = await Item.findAll({type:itemtype}); 
//         res.status(200).json(itemsByType);
//     }catch(error){
//         res.status(500).json(error);
//     }
// }

