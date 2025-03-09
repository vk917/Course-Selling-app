const express=require("express")
// Create instance of http server 
const app=express();

const {courseRouter}=require("./Routes/course");
const {userRouter}=require("./Routes/user");
const {adminRouter}=require("./Routes/admin");

const mongoose=require("mongoose")
// import {z} from 'zod';
const bcrypt=require("bcrypt")



// Better way to create Route

app.use("/user",userRouter);
app.use("/course",courseRouter);
app.use("/admin",adminRouter);

// Not better way
// userRoutes(app);
// courserRouter(app);

async function main(){

    await mongoose.connect("mongodb+srv://kuvishal056:s6lX21FMg01S8k06@cluster0.siqf0.mongodb.net/Course-Selling").then(console.log("connected!"));
    app.listen(3000);
}

main();

