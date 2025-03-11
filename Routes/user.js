// Better Way to Handle Route 
// instead of exporting them as fn

const {Router}=require("express");
const {z}=require("zod");
const jwt=require("jsonwebtoken");
const {JWT_SECRET}=require("../config")

const {UserSchema}=require("../db")

const userRouter=Router();

const bcrypt=require("bcrypt");

userRouter.post("/signup",async (req,res)=>{
    try{
        
        const userCheck=z.object({
            email: z.string().min(3).max(20).email(),
            password: z.string().min(3).max(12),
            firstName: z.string().min(3).max(12),
            lastName: z.string().min(3).max(12),
        })

        const parsedCheck=userCheck.safeParse(req.body);
        console.log(req.body);

        if (!parsedCheck.success) {
            return res.status(400).json({ message: "Invalid input", error: parsedCheck.error });
        }
    
        if(parsedCheck.success){
            const {email,password, firstname, lastname}=req.body;   
            const hasedPassword=await bcrypt.hash(password,5);   

            await UserSchema.create({
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
        
userRouter.post("/signin",async (req,res)=>{
    const {email,password}=req.body;

    const user=await UserSchema.findOne({
        email: email,
    })
    console.log(user);
    

    if(user){
        const passwComp=bcrypt.compare(password,user.password);
        if(passwComp){
            const token=jwt.sign({
                _id: user._id
            },JWT_SECRET);

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

// User see all courses
userRouter.get("/purchase",(req,res)=>{

})

                
module.exports={
    userRouter: userRouter
}

                // -----------------------------------------------------------------------------------
                // -----------------------------------------------------------------------------------
                // -----------------------------------------------------------------------------------

// function userRoutes(app){

//     app.post("/user/signup",async (req,res)=>{
//     try{
//         const name=req.body.name;
//         const email=req.body.email;
//         const password=req.body.password;

//         await UserSchema.create({
//             name: name,
//             email: email,
//             password: bcrypt.hash(password,5)
//         })

//     res.json({
//         message: "user is connected"
//     })
//     }catch(e){
//         res.json({
//             message: "User not connected!"
//         })
//     }
//     })

//     app.post("/user/signin",(req,res)=>{

//     })

//     // User see all courses
//     app.get("/user/purchase",(req,res)=>{

//     })
// }

// module.exports={
//     userRoutes:userRoutes
// }