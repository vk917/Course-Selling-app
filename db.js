const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const ObjectId=Schema.ObjectId;

mongoose.connect(process.env.MONGO_URL);

const userS=new Schema({

    email: {type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String,
})


const adminS=new Schema({
   
    email: String,
    password: String,
    firstName: String,
    lastName: String,
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

const UserSchema=mongoose.model("users",userS);
const adminSchema=mongoose.model("admin",adminS);
const courseSchema=mongoose.model("course",courseS);
const purchaseSchema=mongoose.model("purchases",purchaseS);

module.exports={
    UserSchema,
    adminSchema,
    courseSchema,
    purchaseSchema
}
