const mongoose=require("mongoose");

const batchschema=mongoose.Schema({
    Batchname:{type:String,require:true}
},
{
    timestamps:true
});

const batchmodel=new mongoose.model("batch",batchschema)

module.exports=batchschema
