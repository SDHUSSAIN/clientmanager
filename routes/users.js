import express from "express";
const router = express.Router();


import {createUser, deleteUser, getUser, getUsers, updateUser,uploadUsers } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

router.get("/checkauthentication",verifyToken,(req,res)=>{
    res.send("Hello user you are logged in ");
})

//Create
router.post("/",verifyAdmin,createUser);

//Upload users
router.post("/importfile",verifyAdmin,uploadUsers);
//UPDATE
router.put("/:id",verifyUser, updateUser);

//DELETErouter.post("/",createUser);
router.delete("/:id",verifyUser, deleteUser);

//GET
router.get("/:id",verifyUser, getUser);

//GET ALL
router.get("/", verifyAdmin, getUsers);

export default router ;