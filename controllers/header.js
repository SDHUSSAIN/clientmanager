import Header from "../models/Header.js"


//Create new Header
export const createHeader = async(req,res) => {
    const newHeader = new Header(req.body);
   try{
       const savedHeader = await newHeader.save();
        res.status(200).json(savedHeader);
   }catch(error){
    res.status(500).json(error);
   }
}
//Upload Headers

export const uploadHeaders = (req,res) => {
    const newHeaders = req.body ;
       newHeaders.forEach(async(Header) => {
            const {id,...fieldHeader} = Header ;
            const newHeader = new Header(fieldHeader) ;
            try{
                const savedHeader = await newHeader.save();
                res.status(200).json(savedHeader);
            }catch(error){
                res.status(500).json(error);
            }
        });
}

//Update Header
export const updateHeader = async(req,res) =>{
    try{
        const updatedHeader = await Header.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
         res.status(200).json(updatedHeader);
    }catch(error){
     res.status(500).json(error);
    }

}

//Delete Header
export const deleteHeader = async(req,res) =>{
    try{
        await Header.findByIdAndDelete(req.params.id);
         res.status(200).json("Header deleted successfully");
    }catch(error){
     res.status(500).json(error);
    }

}

//Get Header
export const getHeader = async(req,res) =>{
    try{
        const Header = await Header.findById(req.params.id);
         res.status(200).json(Header);
    }catch(error){
     res.status(500).json(error);
    }

}

//Get all Headers
export const getHeaders = async(req,res) =>{
    try{
        if(Object.keys(req.query).length===0){
            const Headers = await Header.find();
            res.status(200).json(Headers);
        }else{
            const Headers = await Header.find(req.query)
            res.status(200).json(Headers);
        }  
    }catch(error){
     res.status(500).json(error);
    }
}