const express=require("express");
const app=express();

const {adminSchema}=require("../db");

const Router=express.Router;

const adminRouter=Router();

adminRouter.post("signup",async (req,res)=>{
    try{
        const name=req.body.name;
        const email=req.body.email;
        const password=req.body.password;

        await UserSchema.create({
            name: name,
            email: email,
            password: bcrypt.hash(password,5)
        })
        res.json({
                    message: "user is connected"
                })
    }catch(e){
        res.json({
            message: "User not connected!"
        })
    }
})
        
adminRouter.post("/signin",(req,res)=>{

})

// User see all courses
adminRouter.post("/course",(req,res)=>{

})

//Edit the course
adminRouter.put("/course",(req,res)=>{

})

// Admin can see all the course
adminRouter.get("/course/bulk",(req,res)=>{

})

                
module.exports={
    adminRouter: adminRouter 
}
