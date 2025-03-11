require("dotenv").config();

const express=require("express")
// Create instance of http server 
const app=express();
const jwt=require("jsonwebtoken")
const mongoose=require("mongoose")

const z=require("zod");

const nodemon = require("nodemon");
app.use(express.json());

const {courseRouter}=require("./Routes/course");
const {userRouter}=require("./Routes/user");
const {adminRouter}=require("./Routes/admin");

// Better way to create Route

app.use("/user",userRouter);
app.use("/course",courseRouter);
app.use("/admin",adminRouter);

async function main(){

    await mongoose.connect(process.env.MONGO_URL).then(console.log("connected!"));
    app.listen(3000);
}

main();

// Not better way
// userRoutes(app);
// courserRouter(app);

// When user use npm run start they want start their application in production 
// then to we started we dont watch any of files why should i waste the resourse of my 
// process to keep on watching these files and listening for changes

// But when i am developing the appl locally 
// then i run npm run dev 
// which will run nodemon index.js which will keep watching these files 
// so if i change these files backend server will automatically restart 