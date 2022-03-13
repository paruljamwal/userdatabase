const express=require("express");
const connect=require("./config/db");
const userapp=require("./controller/usercontroller");
const studentapp=require("./controller/studentcontroller")
const batchapp=require("./controller/batchcontroller");
const evaluationapp=require("./controller/evaluationcontroller");
const submissionapp=require("./controller/submissioncontroller");
const app=express();
app.use(express.json());

app.listen(5000,async(req,res)=>{
    try{
        await connection(); 
    }
    catch(err){
         console.log("Somthing went wrong please try again later");
    }
    console.log("Listining port 5000");
})

app.use("/user",userapp)
app.use("/student",studentapp)
app.use("/batch",batchapp)
app.use("/evaluation",evaluationapp)
app.use("/submission",submissionapp)