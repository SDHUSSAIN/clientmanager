import express from "express";
const router = express.Router();

import { createInvoice, deleteInvoice, getInvoice, getInvoices, updateInvoice } from "../controllers/invoice.js";
import { verifyAdmin } from "../utils/verifyToken.js";

//CREATE
router.post("/",verifyAdmin, createInvoice);

//UPDATE
router.put("/:id",verifyAdmin, updateInvoice);

//DELETE
router.delete("/:id", verifyAdmin, deleteInvoice);

//GET
router.get("/:id", getInvoice);

//GET ALL
router.get("/", getInvoices);

//Get all Invoices by its type

// router.get("Invoicetype",InvoiceType);

export default router ;