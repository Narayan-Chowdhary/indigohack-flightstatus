const Flight = require('../models/Flight');

const getAllFlights = async (req, res) => {
  try {
    const flights = await Flight.find({});
    res.json(flights);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch flight data' });
  }
};

const getFlightById = async (req, res) => {
  const { flight_id } = req.body;
  if (!flight_id) {
    return res.status(400).json({ error: 'Flight ID is required' });
  }

  try {
    const flight = await Flight.findOne({ flight_id });
    if (!flight) {
      return res.status(404).json({ error: 'Flight not found' });
    }
    res.json(flight);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch flight data' });
  }
};

const getFlightByStatus = async (req, res) => {
  const { status } = req.body;
  if (!status) {
    return res.status(400).json({ error: 'Status is required' });
  }

  try {
    const flight = await Flight.findOne({ status });

    if (!flight) {
      return res.status(404).json({ error: 'Flight not found' });
    }

    res.json(flight);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch flight data' });
  }
};

module.exports = {
  getAllFlights,
  getFlightById,
  getFlightByStatus
};
