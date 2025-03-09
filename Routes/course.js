const express=require("express");
const Router=express.Router;

const courseRouter=Router();

     // End point to purchase course
courseRouter.post("/purchase",(req,res)=>{
        res.json({
            message: ""
        })
    })

    // User see all courses
courseRouter.get("/course/preview",(req,res)=>{
    res.json({
        message: ""
    })
})

// function courserRouter(app){
    
//     // End point to purchase course
//     app.get("/course/purchase",(req,res)=>{
//         res.json({
//             message: ""
//         })
//     })

//     // User see all courses
//     app.get("/course/preview",(req,res)=>{
//         res.json({
//             message: ""
//         })
//     })
// }

// module.exports={
//     courserRouter: courserRouter
// }