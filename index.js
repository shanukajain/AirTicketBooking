const express=require("express");
const app=express();
const cors=require("cors");
const { connection } = require("./MongoDb");
const { UserRoute } = require("./Routes/user");
app.use(express.json());
app.use(cors());


app.get("/",(req,res)=>{
res.send("Home page");
})

app.use("/api",UserRoute);

app.listen(3000,async()=>{
try {
    await connection;
    console.log("connected");
    console.log("connected at port 3000");
} catch (error) {
    console.log(error);
}
    
})