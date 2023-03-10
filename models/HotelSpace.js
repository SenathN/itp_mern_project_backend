const mongoose = require('mongoose');

const hotelSpaceSchema = new mongoose.Schema(
    {
        company_name : { type: String, required : true },
        hotelRep_id : {type : mongoose.Schema.Types.ObjectId , required : true, ref: 'HotelRep'},
        location : { type: String },
        description : { type: String, default : 'No description.'},
        startDate : { type: Date },
        endDate : { type: Date }
    },
    {
        timestamps: true 
    }
) ;

module.exports = mongoose.model('HotelSpace' , hotelSpaceSchema) ;

