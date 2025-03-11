const  { jwt } =require( "jsonwebtoken");
const  { JWT_ADMIN_SECRET } =require("../config");

function adminMiddleware(req,res,next){
    const token=req.headers.token;

    const decoded = jwt.verify(token, JWT_ADMIN_SECRET);


    if(decoded){
        req.adminid=decoded._id;
        next();
    }
    else{
        res.json({
            message: "Wrong cred"
        })
    }
    
}

module.exports={
    adminMiddleware
}