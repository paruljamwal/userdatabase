const mongoose=require("mongoose");

const connection=()=>{
    return mongoose.connect("mongodb+srv://parul:paru@cluster0.kvomh.mongodb.net/studentdata?retryWrites=true&w=majority");
}

module.exports=connection