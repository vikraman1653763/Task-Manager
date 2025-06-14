const mongoose =require("mongoose")

const UserSchema = new mongoose.Schema(
    {
        name:{type:String , required:true ,trim :true,maxLength: 100},
        email :{type:String , required:true , unique : true,trim :true},
        password :{type:String , required:true },
        profileImageUrl :{type:String , default:null},
        role:{type :String , enum:["admin" , "member"] ,default:"member"}
    },
    {timestamps:true}
)
module.exports = mongoose.model("User" , UserSchema);