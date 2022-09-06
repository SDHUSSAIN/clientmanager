import express from "express";
const router = express.Router();

import { createItem, deleteItem, getItem, getItems, updateItem,uploadItems} from "../controllers/item.js";
import { verifyAdmin } from "../utils/verifyToken.js";

//CREATE
router.post("/",verifyAdmin, createItem);
//UPLOAD ITEMS

router.post("/importfile",verifyAdmin, uploadItems);

//UPDATE
router.put("/:id",verifyAdmin, updateItem);

//DELETE
router.delete("/:id", verifyAdmin, deleteItem);

//GET
router.get("/:id", getItem);

//GET ALL
router.get("/", getItems);

//Get all items by its type

// router.get("itemtype",itemType);

export default router ;