const mongo=require("mongoose");
require("dotenv/config");
let url=process.env.mongooUrl;
// console.log(url);
const connection=mongo.connect(url);

module.exports={
    connection
}