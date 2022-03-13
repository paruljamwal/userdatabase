const mongoose=require("mongoose");

const studentschema=mongoose.Schema({
    rollId:{type:Number,require:true},
    currentbatch:{type:String,require:true},

},
{
    timestamps:true
});

const studentmodel= new mongoose.model("student",studentschema)

module.exports=studentschema