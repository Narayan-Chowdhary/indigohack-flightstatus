const { getDB } = require('../config/db');

const getAllFlights = async (req, res) => {
  const db = getDB();

  try {
    const flights = await db.collection('flights').find({}).toArray();
    res.json(flights);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch flight data' });
  }
};

const getFlightById = async (req, res) => {
  const db = getDB();

  const { flight_id } = req.body;
  if (!flight_id) {
    return res.status(400).json({ error: 'Flight ID is required' });
  }
  try {
    const flight = await db.collection('flights').findOne({ flight_id });
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
  const db = getDB();

  const { status } = req.body;
  if (!status) {
    return res.status(400).json({ error: 'Status is required' });
  }

  try {
    const flight = await db.collection('flights').findOne({ status });

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
