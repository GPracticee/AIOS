import express from "express";
import data from "./data.js";
import mongoose from "mongoose";
import dotenv from "dotenv"
import seedRouter from "./routes/SeedRoutes.js";
import productRouter from "./routes/ProductRout.js";
import userRouter from "./routes/userRout.js";


dotenv.config()
mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("connected successfull");
}).catch((err)=>{
    console.log(err.message);
})

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/seed',seedRouter)
app.use('/api/products',productRouter)
app.use('/api/users',userRouter)



//middleware
app.use((err,req,res,next)=>{
    res.status(500).send({message:err.message})
})

const port = process.env.PORT || 8001
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})