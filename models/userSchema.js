const mongoose= require("mongoose");
const { boolean } = require("yup");

const userSchema= mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
},
    password:{
        type:String,
        require:true,
},
   isAdmin:{
    type:boolean,
    default:false,
}
  
}
)
const User=mongoose.model("User", userSchema);
module.exports=User;