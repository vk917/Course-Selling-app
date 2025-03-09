const express=require("express")
const app=express();
const mongoose=require("mongoose")
import {z} from 'zod';
const bcrypt=require("bcrypt")

mongoose.connect("").then(console.log("connected!"));

app.use(express.json());

app.post("/signup",async (req,res)=>{

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

app.post("/signin",(req,res)=>{

})

app.post("/purchase",(req,res)=>{

})

app.get("/course",(req,res)=>{

})

function auth(req,res,next){
    const token=req.headers;
}

app.listen(3000);

