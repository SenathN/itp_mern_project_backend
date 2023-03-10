const express = require('express');
const Router = express.Router();
const HotelRepController = require ('../controllers/hotelRepController');

Router.route('/') // at the 'users/'
    .get(HotelRepController.getAllHotelReps)
    .post(HotelRepController.createHotelRep)
    .patch(HotelRepController.updateHotelRep)
    .delete(HotelRepController.deleteHotelRep)

module.exports = Router ;