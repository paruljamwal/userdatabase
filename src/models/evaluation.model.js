const mongoose=require("mongoose");

const Evalutionschema=new mongoose.Schema({
    dataOfEvaluation:{type:Number,require:true},
    batch_id:{type:mongoose.Schema.Types.ObjectId,ref:"batch"},
    user_id:{type:mongoose.Schema.Types.ObjectId,ref:"user"}
});

const Evalutionmodel=new mongoose.model("evaluation",Evalutionschema);

module.exports=Evalutionschema