require('dotenv').config();
const mongoose = require("mongoose")
const Flight = require('../../models/Flight');
const uri = process.env.MONGODB_URI ;

const flightData = [
  {
    flight_id: "6E 2341",
    airline: "Indigo",
    status: "On Time",
    departure_gate: "A12",
    arrival_gate: "B7",
    scheduled_departure: "2024-07-26T14:00:00Z",
    scheduled_arrival: "2024-07-26T18:00:00Z",
    actual_departure: null,
    actual_arrival: null,
  },
  {
    flight_id: "6E 2342",
    airline: "Indigo",
    status: "Delayed",
    departure_gate: "C3",
    arrival_gate: "D4",
    scheduled_departure: "2024-07-26T16:00:00Z",
    scheduled_arrival: "2024-07-26T20:00:00Z",
    actual_departure: null,
    actual_arrival: null,
  },
  {
    flight_id: "6E 2343",
    airline: "Indigo",
    status: "Cancelled",
    departure_gate: "E2",
    arrival_gate: "F1",
    scheduled_departure: "2024-07-26T12:00:00Z",
    scheduled_arrival: "2024-07-26T16:00:00Z",
    actual_departure: null,
    actual_arrival: null,
  },
];

const insertData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    const result = await Flight.insertMany([...flightData]);
    mongoose.disconnect()
  } catch (error) {
    console.error(error);
  }
};

insertData()

