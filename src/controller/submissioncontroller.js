const express=require("express");
const app=express();
const submissionmodel=require("../models/submission.model")
app.use(express.json());


app.get("",async(req,res)=>{
    try{
        const submissions= await submissionmodel.find().populate({path:"user_id" , 
        select:{"firstname":1, _id:0 }});
     return res.status(200).send({submission:submissions});
    }
    catch(err){
        console.log("Somthing went wrong please try again later");
        res.status(404).send("Somthing went wrong please try again later");
      }
});   


app.post("",async(req,res)=>{
try{
  const submission=await submissionmodel.create(req.body)
  return res.send({submission:submission});
}
catch(err){
  console.log("Something went wrong please try agein later")
}
});

app.get("/:id",async(req,res)=>{
    try{
        const submission= await submissionmodel.findById(req.params.id).populate({path:"userid",select:{"firstname":1, _id:0}}) ;
        return res.send({submission:submission})
    }
    catch(err){
        res.send("Somthing went wrong please do some time later");
    }
})



app.patch("/:id",async(req,res)=>{
    try{
     const submission=await submissionmodel.findByIdAndUpdate(req.params.id,req.body)
     return res.send(submission);
    }
    catch(err){
        res.status(404).send("Somthing went wrong please try later")
    }
})

module.exports=app