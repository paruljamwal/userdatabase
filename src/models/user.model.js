const mongoose=require("mongoose");
const userschema=mongoose.Schema({
    firstname:{type:String},
    lastname:{type:String},
    gender:{type:String},
    dob:{type:String},

},
{
    versionkey:false,
    timestamps:true
});

const usermodel= new mongoose.model("user",userschema);

module.exports=userschema