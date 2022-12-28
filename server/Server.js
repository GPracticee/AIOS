import express from "express";
import data from "./data.js";
import mongoose from "mongoose";
import dotenv from "dotenv"
import seedRouter from "./routes/SeedRoutes.js";
import productRouter from "./routes/ProductRout.js";
// import cors from "cors";
// import bodyParser from "body-parser";
// import pkg from "body-parser";
// const { urlencoded } = pkg;

dotenv.config()
mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("connected successfull");
}).catch((err)=>{
    console.log(err.message);
})

const app = express()
app.use('/api/seed',seedRouter)
app.use('/api/products',productRouter)
app.use(express.json())



// app.use(cors());
// app.use(bodyParser,urlencoded({extended:true}));
// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Allow-Origin","*")
//     res.setHeader("Access-Control-Allow-Method","GET,POST,PUT,DELETE,OPTIONS")
//     res.setHeader("Access-Control-Allow-Headers","Content-Type")
//     res.setHeader("Access-Control-Allow-Credentials","true")
//     next();
// })

const port = process.env.PORT || 8001
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})