const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const ObjectId=Schema.ObjectId;

mongoose.connect("mongodb+srv://kuvishal056:s6lX21FMg01S8k06@cluster0.siqf0.mongodb.net/Course-Selling");

const userS=new Schema({

    email: {type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String,
})


const adminS=new Schema({
    _id: ObjectId,
    name: String,
    email: String,
    password: String
})


const courseS=new Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    createrId: ObjectId
})


const purchaseS=new Schema({

    courseId: ObjectId,
    userId: ObjectId
})

const UserSchema=mongoose.model("user",userS);
const adminSchema=mongoose.model("admin",adminS);
const coursechema=mongoose.model("course",courseS);
const purchaseSchema=mongoose.model("purchases",purchaseS);

module.exports={
    UserSchema,
    adminSchema,
    coursechema,
    purchaseSchema
}
