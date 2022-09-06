import express from "express";
const router = express.Router();

import { createComservice, deleteComservice, getComservice, getComservices, updateComservice,uploadComservices } from "../controllers/comservice.js";
import { verifyAdmin } from "../utils/verifyToken.js";

//CREATE
router.post("/",verifyAdmin, createComservice);

//UPLOAD COMSERVICES
router.post("/importfile",verifyAdmin, uploadComservices);

//UPDATE
router.put("/:id",verifyAdmin, updateComservice);

//DELETE
router.delete("/:id", verifyAdmin, deleteComservice);

//GET
router.get("/:id", getComservice);

//GET ALL
router.get("/", getComservices);

//count by city
// router.get("/countByCity",countByCity);

//COUNT BY TYPE

// router.get("/countByType",countByType);



export default router ;