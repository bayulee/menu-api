const Router=require("express");
const createUser = require("../controllers/userController");
const {createUser, loginUser}=require("../controllers/userController")

const router = Router();

router
//.route("/api/user")
.post("/register", createUser)
.post("/login",loginUser)

module.exports=router;