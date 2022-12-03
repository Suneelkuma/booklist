const express=require("express");
const router=express.Router();
const Book=require("../models/book")
router.get("/booklist",(req,res)=>{
    try{
const book=Book.find(req.body);
res.status(200).json({
    status:"Success",
    data:book
})

    }catch(e){
        res.status(400).json({
            status:"failed",
            message:e.message
          
        })
    }
})
router.post("/booklist",(req,res)=>{
    
    try{
const book=Book.create(req.body);
res.status(200).json({
    status:"Success",
    data:book
})

    }catch(e){
        res.status(400).json({
            status:"failed",
            message:e.message
          
        })
    }
})

module.exports=router