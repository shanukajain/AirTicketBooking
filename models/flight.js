const MongoDb=require("mongoose");
const FlightSchema=MongoDb.Schema({
        airline: String,
        flightNo: String,
        departure: String,
        arrival: String,
        departureTime: Date,
        arrivalTime: Date,
        seats: Number,
        price: Number
      
})
const FlightModel=MongoDb.model("flight",FlightSchema);

module.exports={
    FlightModel
}