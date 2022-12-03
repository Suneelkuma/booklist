const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const LoginSchema=new Schema({
    name:{type:"String" ,required:"true"},
    password:{type:"Number",required:"true"}
   
})
const loginModel=mongoose.model("Login",LoginSchema);
module.exports=loginModel;