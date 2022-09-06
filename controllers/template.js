import Template from "../models/Template.js"


//Create new Template
export const createTemplate = async(req,res) => {
    const newTemplate = new Template(req.body);
   try{
       const savedTemplate = await newTemplate.save();
        res.status(200).json(savedTemplate);
   }catch(error){
    res.status(500).json(error);
   }
}


//Update Template
export const updateTemplate = async(req,res) =>{
    try{
        const updatedTemplate = await Template.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
         res.status(200).json(updatedTemplate);
    }catch(error){
     res.status(500).json(error);
    }

}

//Delete Template
export const deleteTemplate = async(req,res) =>{
    try{
        await Template.findByIdAndDelete(req.params.id);
         res.status(200).json("Template deleted successfully");
    }catch(error){
     res.status(500).json(error);
    }

}

//Get Template
export const getTemplate = async(req,res) =>{
    try{
        const Template = await Template.findById(req.params.id);
         res.status(200).json(Template);
    }catch(error){
     res.status(500).json(error);
    }

}

//Get all Templates
export const getTemplates = async(req,res) =>{

    try{
        if(Object.keys(req.query).length===0){
            const Templates = await Template.find();
            res.status(200).json(Templates);
        }else{
            const Templates = await Template.find(req.query);
            res.status(200).json(Templates);
        }
         
    }catch(error){
     res.status(500).json(error);
    }
}