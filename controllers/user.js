import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from "bcrypt"


//Create new user
export const createUser = async(req,res) => {
    
    
   try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password,salt);

        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedPassword,
            isAdmin:req.body.isAdmin
        });

        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
   }catch(error){
    res.status(500).json(error);
   }
}

//Upload users

export const uploadUsers = (req,res) => {
    const newUsers = req.body ;
       newUsers.forEach(async(user) => {
            try{
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(user.password,salt);

                const newUser = new User({
                    username:user.username,
                    email:user.email,
                    password:hashedPassword,
                    isAdmin:user.isAdmin
                });
                const saveduser = await newUser.save();
                res.status(200).json(saveduser);
            }catch(error){
                res.status(500).json(error);
            }
        });
}

//update user

export const updateUser = async(req,res) =>{
    console.log(req.params.id);
    console.log(req.body);
    console.log(req.body.password.length);
    try{
        if(req.body.password.length < 10){
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password,salt);

            const newUser = {
                username:req.body.username,
                email:req.body.email,
                password:hashedPassword,
                isAdmin:req.body.isAdmin
            };
            const updatedUser = await User.findByIdAndUpdate(mongoose.Types.ObjectId.createFromHexString(req.params.id),{$set:newUser},{new:true});
            res.status(200).json(updatedUser);

        }else{
            
            const updatedUser = await User.findByIdAndUpdate(mongoose.Types.ObjectId.createFromHexString(req.params.id),{$set:req.body},{new:true});
            res.status(200).json(updatedUser);
        }
        
    }catch(error){
        
     res.status(500).json(error);
    }

}

//delete user

export const deleteUser = async(req,res) =>{
    try{
        await User.findByIdAndDelete(req.params.id);
         res.status(200).json("User deleted successfully");
    }catch(error){
     res.status(500).json(error);
    }

}
//get user
export const getUser = async(req,res) =>{
    try{
        const userid = req.params.id;
       
        const user = await User.findById(mongoose.Types.ObjectId.createFromHexString(userid));
         res.status(200).json(user);
    }catch(error){
     res.status(500).json(error);
    }

}
//get users
export const getUsers = async(req,res) =>{
    try{
        const users = await User.find();
         res.status(200).json(users);
    }catch(error){
     res.status(500).json(error);
    }
}
