const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const Object=mongoose.Object;

mongoose.connect("")

const userS=new Schema({
    name: String,
    email: String,
})


const adminS=new Schema({
    name: String,
    email: String,
    password: String
})


const courseS=new Schema({
    name: String
})


const passwordS=new Schema({
    name: String,
    email: String,
    password: String
})

const UserSchema=mongoose.model("uSch",userS);
const adminSchema=mongoose.model("uSch",adminS);
const coursechema=mongoose.model("uSch",courseS);
const passwordSchema=mongoose.model("uSch",passwordS);

module.exports={
    UserSchema,
    adminSchema,
    coursechema,
    passwordSchema
}
