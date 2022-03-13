const express=require("express");
const app=express();
const Evalutionmodel=require("../models/evaluation.model")
app.use(express())

app.get("",async(req,res)=>{
    try{
        const evaluations= await Evalutionmodel.find().lean().exec();
     return res.status(200).send({evaluation:evaluations});
    }
    catch(err){
        console.log("Somthing went wrong please try again later");
        res.status(404).send("Somthing went wrong please try again later");
      }
});   


app.post("",async(req,res)=>{
try{
  const evaluations=await Evalutionmodel.create(req.body)
  return res.send({evaluation:evaluations});
}
catch(err){
  console.log("Something went wrong please try agein later")
}
});

module.exports=app