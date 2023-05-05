const express=require("express");
const router=new express.Router();
const User=require("../model/user");

router.post("/userSignup",async(req,res)=>{
       try{
        let body=req.body;
        let user=new User(body);
        let user1=await user.save();
        res.json({status:true,msg:"Registration successful"});
       }catch(err){
        res.status(400).send(err);
       }
});

router.post("/userSignin",async(req,res)=>{
    try{
        let body=req.body;
        let user=await User.findOne({email:body.email,password:body.password});
        if(user){
            res.json({status:true,msg:"Login successful",user:user});
        }else{
            res.status(404).json({status:false,msg:"Incorrect Username and Password!"});
        }
    }catch(err){
        res.status(400).send(err);
    }
})

module.exports=router;