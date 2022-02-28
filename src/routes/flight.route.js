// import express
const {Router} = require('express')
const router = Router()

//import controllers
const flightCtrl = require('../controllers/flight.controller')


// define the different routes

router.get('/flights', flightCtrl.getFlights);
router.post('/flight', flightCtrl.createFlight);
router.get('/flight/:id', flightCtrl.getFlight);
router.put('/flight/:id', flightCtrl.editFlight);
router.delete('/flight/:id', flightCtrl.deleteFlight);

//export the module
module.exports = router