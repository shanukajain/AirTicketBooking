const MongoDb=require("mongoose");
const UserSchema=MongoDb.Schema({
        name: String,
        email: String,
        password: String
      
})
const UserModel=MongoDb.model("user",UserSchema);

module.exports={
    UserModel
}