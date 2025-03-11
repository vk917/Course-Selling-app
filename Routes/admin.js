const express=require("express");
const z= require("zod");
const bcrypt= require("bcrypt");
const app=express();
const jwt=require("jsonwebtoken")
const {JWT_ADMIN_SECRET}=require("../config")

const {adminSchema , courseSchema}=require("../db");

const { adminMiddleware } = require("../middleware/admin");

const Router=express.Router;

const adminRouter=Router();

adminRouter.post("/signup",async (req,res)=>{
    try{
        
        const adminCheck=z.object({
            email: z.string().min(3).max(20).email(),
            password: z.string().min(3).max(12),
            firstName: z.string().min(3).max(12),
            lastName: z.string().min(3).max(12),
        })

        const parsedCheck=adminCheck.safeParse(req.body);
        console.log(req.body);

        if (!parsedCheck.success) {
            return res.status(400).json({ message: "Invalid input", error: parsedCheck.error });
        }
    
        if(parsedCheck.success){
            const {email,password, firstname, lastname}=req.body;   
            const hasedPassword=await bcrypt.hash(password,5);   

            await adminSchema.create({
                email: email,
                password: hasedPassword,
                firstName: firstname,
                lastName: lastname
            })
            res.json({
                message: "user is connected"
            })
        }
    }catch(e){
        console.error("Error:", e);

        res.json({
            message: "User not kvjkvjkvjk connected!"
        })
    }
})
        
adminRouter.post("/signin",async (req,res)=>{
    const {email,password}=req.body;

    const user=await adminSchema.findOne({
        email: email,
    })
    console.log(user);
    

    if(user){
        const passwComp=await bcrypt.compare(password,user.password);
        if(passwComp){
            const token=jwt.sign({
                _id: user._id
            },JWT_ADMIN_SECRET);

            res.json({
                token: token
            })
        }
        else{
            res.json({
                message: "incorrect "
            })
        }
    }else{
        res.json({
            message: "user not found "
        })
    }

})

// create course
adminRouter.post("/course",adminMiddleware,async (req,res)=>{
    const adminid=req.adminid;

    const {title,description,price,imageUrl}=req.body;

    const course=await courseSchema.create({
        title,
        description,
        price,
        imageUrl,
        createrId: adminid
    })

    res.json({
        message: "Course Created"
    })
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
