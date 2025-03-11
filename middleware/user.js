const jwt=require("jsonwebtoken");
const {JWT_SECRET}=require("../config")

function userMiddleware(req,res,next){
    const token=req.headers.token;

    const decoded=jwt.verify(token,JWT_SECRET);

    if(decoded){
        req.userid=decoded._id;
        next();
    }
    else{
        res.json({
            message: "Wrong cred"
        })
    }
    
}

module.exports={
    userMiddleware
}