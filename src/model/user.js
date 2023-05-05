const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    contact:{type:Number,required:true},
    email:{type:String},
    password:{type:String,required:true},
},{timestamps:true});

const user=new mongoose.model("user",userSchema);

module.exports=user;