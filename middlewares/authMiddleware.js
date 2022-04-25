const jsonwebtoken = require("jsonwebtoken");
const user=require("../models/userSchema")

const jwt=require("jsonwebtoken");
const User = require("../models/userSchema");

exports.protect=async function(req,res,next){
let token;
if(
    req.headers.authorisation
)try{
    token=req.headers.authorisation;
    const decoded=jwt.verify(token,process.env.JWT_SECRET);
    req.user=await User.findById(decoded.id);
    next();
}catch(err){
    res.status(401).json({
        message:"invalid token"
    })
}
if (!token){
    res.status(401).json({
        message: "you are not authorised"
    })
}

}