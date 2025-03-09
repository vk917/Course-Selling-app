const express=require("express")
// Create instance of http server 
const app=express();

const {courseRouter}=require("./Routes/course");
const {userRouter}=require("./Routes/user");

const mongoose=require("mongoose")
import {z} from 'zod';
const bcrypt=require("bcrypt")

mongoose.connect("").then(console.log("connected!"));

app.use(express.json());

// Better way to create Route

app.use("/user",userRouter);
app.use("/course",courseRouter);

// Not better way
// userRoutes(app);
// courserRouter(app);

app.listen(3000);

