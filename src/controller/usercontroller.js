const express=require("express");
const app=express();
const usermodel=require("../models/user.model")
app.use(express())
app.get("",async(req,res)=>{
    try{
        const users= await usermodel.find().lean().exec();
     return res.status(200).send({user:users});
    }
    catch(err){
        console.log("Somthing went wrong please try again later");
        res.status(404).send("Somthing went wrong please try again later");
      }
});   


app.post("",async(req,res)=>{
try{
  const users=await usermodel.create(req.body)
  return res.send({user:users});
}
catch(err){
  console.log("Something went wrong please try agein later")
}
});


app.get("/:id",async(req,res)=>{
  try{
      const users= await user.findById(req.params.id);
      return res.send({user:users})
  }
  catch(err){
      res.send("Somthing went wrong please do some time later");
  }
})



app.patch("/:id",async(req,res)=>{
  try{
   const users=await usermodel.findByIdAndUpdate(req.params.id,req.body)
   return res.send({user:users});
  }
  catch(err){
      res.status(404).send("Somthing went wrong please try later")
  }
})

app.delete("/:id",async(req,res)=>{
  try{
   const users=await usermodel.findByIdAndremove(req.params.id)
   return res.send({user:users});
  }
  catch(err){
      res.status(404).send("Somthing went wrong please try later")
  }
})
module.exports=app