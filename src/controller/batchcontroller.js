const express=require("express");
const app=express();
const batchmodel=require("../models/batch.model")
app.use(express())
app.get("",async(req,res)=>{
    try{
        const batch= await batchmodel.find().lean().exec();
     return res.status(200).send(batch);
    }
    catch(err){
        console.log("Somthing went wrong please try again later");
        res.status(404).send("Somthing went wrong please try again later");
      }
});   


app.post("",async(req,res)=>{
try{
  const batch=await batchmodel.create(req.body)
  return res.send(batch);
}
catch(err){
  console.log("Something went wrong please try agein later")
}
});

module.exports=app
