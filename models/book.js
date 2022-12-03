const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const BookSchema=new Schema({
    title:{type:"String" ,required:"true"},
    authorName:{type:"String",required:"true"},
    genre:{type:"String",required:"true"}
})
const bookModel=mongoose.model("Book",BookSchema);
module.exports=bookModel;