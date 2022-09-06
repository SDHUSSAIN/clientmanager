import Comservice from "../models/Comservice.js"


//Create new Comservice
export const createComservice = async(req,res) => {
    const newComservice = new Comservice(req.body);
   try{
       const savedComservice = await newComservice.save();
        res.status(200).json(savedComservice);
   }catch(error){
    res.status(500).json(error);
   }
}

//Upload comservices

export const uploadComservices = (req,res) => {
    const newComservices = req.body ;
       newComservices.forEach(async(comservice) => {
            const {id,...fieldcomservice} = comservice ;
            const newcomservice = new Comservice(fieldcomservice) ;
            try{
                const savedcomservice = await newcomservice.save();
                res.status(200).json(savedcomservice);
            }catch(error){
                res.status(500).json(error);
            }
        });
}


//Update Comservice
export const updateComservice = async(req,res) =>{
    try{
        const updatedComservice = await Comservice.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
         res.status(200).json(updatedComservice);
    }catch(error){
     res.status(500).json(error);
    }

}

//Delete Comservice
export const deleteComservice = async(req,res) =>{
    try{
        await Comservice.findByIdAndDelete(req.params.id);
         res.status(200).json("Comservice deleted successfully");
    }catch(error){
     res.status(500).json(error);
    }

}

//Get Comservice
export const getComservice = async(req,res) =>{
    try{
        const comservice = await Comservice.findById(req.params.id);
         res.status(200).json(comservice);
    }catch(error){
     res.status(500).json(error);
    }

}

//Get all Comservices
export const getComservices = async(req,res) =>{

    try{
        if(Object.keys(req.query).length===0){
            const Comservices = await Comservice.find();
            res.status(200).json(Comservices);
        }else{
            const Comservices = await Comservice.find(req.query);
            res.status(200).json(Comservices);
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
