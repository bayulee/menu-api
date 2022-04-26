const express=require("express")
const morgan=require("morgan")
require("dotenv").config()
const connectDB=require("./configDB/connectDB")
const foodRoute=require("./routes/foodRoute")
const userRoute=require("./routes/userRoute")

const app=express();


connectDB()
//middleware
app.use(express.json())
app. use(morgan("dev"))
app.use(foodRoute)
app.use("/users",userRoute);
const PORT=process.env.PORT||6005
//home route
app.get("/",(req,res)=>{
    res.json("WELCOME TO MY MENU API.")
})


app.listen(PORT, ()=>{
console.log("SERVER IS UP!")
})