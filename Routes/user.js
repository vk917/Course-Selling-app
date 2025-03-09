// Better Way to Handle Route 
// instead of exporting them as fn

const {Router}=require("express");

const userRouter=Router();

userRouter.post("signup",async (req,res)=>{
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
        
userRouter.post("/signin",(req,res)=>{

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