
const express=require("express");
const app=express();
const studentmodel=require("../models/student.model")
app.use(express())

app.get("",async(req,res)=>{
    try{
        const students= await studentmodel.find().lean().exec();
     return res.status(200).send({studednt:students});
    }
    catch(err){
        console.log("Somthing went wrong please try again later");
        res.status(404).send("Somthing went wrong please try again later");
      }
});   


app.post("",async(req,res)=>{
try{
  const students=await studentmodel.create(req.body)
  return res.send({studednt:students});
}
catch(err){
  console.log("Something went wrong please try agein later")
}
});

module.exports=app
