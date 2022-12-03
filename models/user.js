const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const UserSchema=new Schema({
    name:{type:"String",required:"true" },
    password:{type:"Number",required:"true"  },
    confirmpassword:{type:"Number",required:"true"  }
})
const userModel=mongoose.model("User",UserSchema);
module.exports=userModel;

