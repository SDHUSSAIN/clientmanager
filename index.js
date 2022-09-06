import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import cors from "cors"


//importing routes 
import authRoute from "./routes/auths.js"
import comservicesRoute from "./routes/comservices.js"
import itemsRoute from "./routes/items.js"
import customersRoute from "./routes/customers.js"
import usersRoute from "./routes/users.js"
import invoicesRoute from "./routes/invoices.js"
import headersRoute from "./routes/headers.js"
import templatesRoute from "./routes/templates.js"


const app = express()
 dotenv.config()


//to establish connection with mnongodb
 const connect = async () => {
     try{
         await mongoose.connect(process.env.DB);
         console.log("connected to backend server")
     } catch(error){
        
     }
 }

 mongoose.connection.on("disconnected", ()=>{
     console.log("MongoDB disconnected");
 })


 //midelwares
 app.use(express.json());
 app.use(cookieParser());
 app.use(cors());


 //base routes
 app.use("/api/v1/auth", authRoute);
 app.use("/api/v1/comservices", comservicesRoute);
 app.use("/api/v1/customers", customersRoute);
 app.use("/api/v1/items", itemsRoute);
 app.use("/api/v1/users", usersRoute);
 app.use("/api/v1/invoices", invoicesRoute);
 app.use("/api/v1/headers", headersRoute);
 app.use("/api/v1/templates", templatesRoute);
 
//testing the connection 
const port = process.env.PORT || 5000
 app.listen(port,()=>{
     connect();
     console.log("mongodb connected"); 
 })