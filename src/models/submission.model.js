const mongoose=require("mongoose");

const submissionschema=new mongoose.Schema({
    evauation_id:{type:mongoose.Schema.Types.ObjectId,ref:"evaluation"},
    user_id:{type:mongoose.Schema.Types.ObjectId,ref:"student"},
    marks:{type:Number,require:true}
},
{
    timestamps:true
});

const submissionmodel=new mongoose.model("submission",submissionschema)

module.exports=submissionschema