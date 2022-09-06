import express from "express";
const router = express.Router();

import { createCustomer, deleteCustomer, getCustomer, getCustomers, updateCustomer,uploadCustomers } from "../controllers/customer.js";
import { verifyAdmin } from "../utils/verifyToken.js";

//CREATE
router.post("/",verifyAdmin, createCustomer);

//UPLOAD
router.post("/importfile",verifyAdmin, uploadCustomers);
//UPDATE
router.put("/:id",verifyAdmin, updateCustomer);

//DELETE
router.delete("/:id", verifyAdmin, deleteCustomer);

//GET
router.get("/:id", getCustomer);

//GET ALL
router.get("/", getCustomers);

//count by city
// router.get("/countByCity",countByCity);

//COUNT BY TYPE

// router.get("/countByType",countByType);



export default router ;