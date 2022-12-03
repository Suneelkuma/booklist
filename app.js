const bodyParser = require("body-parser");
const express=require("express");
const app=express();
var cors = require('cors');
const jwt = require('jsonwebtoken');
app.use(bodyParser.json());
const mongoose=require("mongoose")
const User=require("./models/user")
mongoose.connect(process.env.DB_URL || 'mongodb+srv://SunilGupta:Sunil12345@cluster0.uznsolw.mongodb.net/?retryWrites=true&w=majority',()=>console.log("mongo db connected succesfully"))
const PORT = process.env.PORT || 5000;

const register=require("./api/register");
const login=require("./api/login");
const books=require("./api/book")
app.get("/",(req ,res)=>{
    res.send ("Hello ")
})
app.use(cors())
app.use("/",register);
app.use("/",login);
app.use("/",books)
//
// jwt.verify(token,SECRET,function(err,decoded){  // jwt keeps a record of the tokens
//     if(err){
//         return res.status(401).json({
//             status:"failed",
//             message:"invalid token"
//         })
//     }
//     else{
//         req.user = decoded.data
//         next();
//     }
// })


app.listen(PORT,()=>console.log(`server is up at  ${PORT}`));

// username-SunilGupta
// pass-Sunil12345