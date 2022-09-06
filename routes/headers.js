import express from "express";
const router = express.Router();

import { createHeader, deleteHeader, getHeader, getHeaders, updateHeader,uploadHeaders} from "../controllers/header.js";
import { verifyAdmin } from "../utils/verifyToken.js";

//CREATE
router.post("/",verifyAdmin, createHeader);
//UPLOAD HeaderS

router.post("/importfile",verifyAdmin, uploadHeaders);

//UPDATE
router.put("/:id",verifyAdmin, updateHeader);

//DELETE
router.delete("/:id", verifyAdmin, deleteHeader);

//GET
router.get("/:id", getHeader);

//GET ALL
router.get("/", getHeaders);

//Get all items by its type

// router.get("itemtype",itemType);

export default router ;