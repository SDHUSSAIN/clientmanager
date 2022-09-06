import express from "express";
const router = express.Router();


import { createTemplate, deleteTemplate, getTemplate, getTemplates, updateTemplate } from "../controllers/template.js";
import { verifyAdmin } from "../utils/verifyToken.js";

//CREATE
router.post("/",verifyAdmin, createTemplate);



//UPDATE
router.put("/:id",verifyAdmin, updateTemplate);

//DELETE
router.delete("/:id", verifyAdmin, deleteTemplate);

//GET
router.get("/:id", getTemplate);

//GET ALL
router.get("/", getTemplates);



export default router ;