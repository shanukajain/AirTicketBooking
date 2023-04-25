const express=require("express");
const { UserModel } = require("../models/user");
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { FlightModel } = require("../models/flight");
const { BookingModel } = require("../models/booking");
const { Authentication } = require("../middelware/Authentication");
const UserRoute=express.Router();
UserRoute.get("/",async(req,res)=>{
    let data=await UserModel.find();
    res.send(data);
})

UserRoute.post("/register",async(req,res)=>{
    let payload=req.body;
    try {
        let data=await UserModel.findOne({"email":payload.email});
        if(data){
        bcrypt.hash(payload.password, 5,async function(err, hash) {
            payload.password=hash;
            let user=new UserModel(payload);
            await user.save();
            res.status(201).send("done");
        });
    }else {

    }
        
    } catch (error) {
        res.status(404);
    }
})
UserRoute.post("/login",async(req,res)=>{
    let {email,password}=req.body;
    try {
        let user=await UserModel.findOne({email});
        bcrypt.compare(password, user.password, function(err, result) {
         if(result){
            var token = jwt.sign({"user":user._id }, 'Air_ticket');
            res.status(201).send({token})
         }else {
            res.status(400)
        }
        });
    } catch (error) {
        res.status(404)
    }
})
UserRoute.use(Authentication);
UserRoute.get('/flights/:id',async(req,res)=>{
    let id=req.params.id;
    console.log(req.params.id)
    let flights;
try {
     flights=await FlightModel.find({"_id":id});
    res.status(200).send(flights);
} catch (error) {
res.status(400);    
}
})
UserRoute.get('/flights',async(req,res)=>{
try {
   let flights  =await FlightModel.find();
    res.status(200).send(flights);
} catch (error) {
res.status(400);    
}
})
UserRoute.post("/flights",async(req,res)=>{
try {
    let payload=req.body;
    // payload.departureTime=new Date(payload.departureTime);
    // payload.arrivalTime=new Date(payload.arrivalTime);
    console.log(payload.arrivalTime);
    let flight=new FlightModel(payload);
    await flight.save();
    res.status(201).send("new flight details entered");
} catch (error) {
    console.log(error);
    res.status(404).send("error");
}    
})

UserRoute.patch("/flights/:id",async(req,res)=>{
    try {
        let id=req.params.id;
        let payload=req.body;
        await FlightModel.findByIdAndUpdate({"_id":id},payload);
        res.status(204).send("done");
    } catch (error) {
        res.status(404).send("error");
    }
})
UserRoute.post("/booking",async(req,res)=>{
try {
    let payload=req.body;
    let booking=new BookingModel(payload);
    console.log(booking,payload);
    await booking.save();
    res.status(201).send("done");
} catch (error) {
    res.status(404).send("error");
}
})
UserRoute.get("/dashboard",async(req,res)=>{
    try {
        let data=await BookingModel.aggregate([{$lookup:{from:"users",localField: 'user', foreignField: '_id', as: 'users'}},
        {$lookup:{from:"flights",localField: 'flight', foreignField: '_id', as: 'flight'}}]);
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send(error);
    }
})

module.exports={
    UserRoute
}