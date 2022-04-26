const jwt = require("jsonwebtoken");
const{token} =require("morgan")
const user = require("../models/userSchema");

exports.protect=async function(req,res,next){
let token;
if(req.headers.authorisation && req.headers.authorisation.starsWith("Bearer")){
try{
    token=req.headers.authorisation.spilt(" ")[1];
    const decoded=jwt.verify(token,process.env.JWT_SECRET);
    req.user=await User.findById(decoded.id);
    next();
}catch(err){
    res.status(401).json({
        message:"invalid token"
    })
}
}
if (!token){
    res.status(401).json({
        message: "you are not authorised"
    });
}

};
//is admin middleware
exports.admin=async function (req,res,next){
if (req.user&&req.user.isAdmin){
    next();
}else{
    res.status(401).json({
        message:"you are not authorised admin",
    });
}
}