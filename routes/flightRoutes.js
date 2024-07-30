const express = require('express');
const router = express.Router();
const flightController = require('../controllers/flightController');

router.get('/status', flightController.getAllFlights);
router.post('/id', flightController.getFlightById);
router.post('/status', flightController.getFlightByStatus);

module.exports = router;
