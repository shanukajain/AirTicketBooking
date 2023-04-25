const MongoDb=require("mongoose");
const BookingSchema=MongoDb.Schema({
        user : { type: MongoDb.Schema.Types.ObjectId, ref: 'User' },
        flight : {type: MongoDb.Schema.Types.ObjectId, ref: 'Flight' }
   
})
const BookingModel=MongoDb.model("Booking",BookingSchema);
module.exports={
    BookingModel
}