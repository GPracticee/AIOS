import express from "express";
import data from "./data.js";
// import cors from "cors";
// import bodyParser from "body-parser";
// import pkg from "body-parser";
// const { urlencoded } = pkg;

const app = express()
app.use(express.json())

app.get('/api/products',(req,res)=>{
    res.send(data.products)
})

app.get('/api/products/slug/:slug',(req,res)=>{
    const product = data.products.find(x => x.slug === req.params.slug)
    if(product){
        res.send(product)
    }else{
        res.status(404).send({message:"product not found"})
    }
})

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