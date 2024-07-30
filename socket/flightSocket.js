

const { getDB } = require('../config/db');
const { sendEmail } = require('../email/sendMail');
const { email } = require('../email/email')

let previousFlights = [];

const flightSocket = (io) => {
  io.on('connection', (socket) => {
    console.log('New client connected');
    let interval;
    let filter = 'All Flights';
    let alphanumericRegex = /^[a-zA-Z0-9\s]+$/;
    let alphabeticRegex = /^[a-zA-Z\s]+$/;

    const emitFlightUpdates = async () => {
      try {
        const db = getDB();
        const flights = await db.collection('flights').find({}).toArray();
        let filteredFlights;
        if (filter === 'All Flights') {
          filteredFlights = flights;
        } else if (alphabeticRegex.test(filter)) {
          filteredFlights = flights.filter(flight => flight.status?.toLowerCase() === filter?.toLowerCase());
        } else if (alphanumericRegex.test(filter)) {
          console.log("<><><>",flights)
          filteredFlights = flights.filter(flight => flight?.flight_id?.toLowerCase() === filter?.toLowerCase());
        } else {
          filteredFlights = "No Such Flight Found"
        }
        if (JSON.stringify(flights) !== JSON.stringify(previousFlights)) {

          previousFlights = flights;
          const subject = 'Flight Status Update';
          const recipient = process.env.RECIEVER_EMAIL;
          sendEmail(recipient, subject, email);
          socket.emit('flightStatusUpdate', filteredFlights);

        }
        socket.emit('flightStatusUpdate', filteredFlights);
      } catch (err) {
        console.error(err);
        socket.emit('flightStatusUpdate', { error: 'Failed to fetch flight data' });
      }
    };

    interval = setInterval(emitFlightUpdates, 3000);

    socket.on('disconnect', () => {
      console.log('Client disconnected');
      if (interval) {
        clearInterval(interval);
      }
    });
    socket.on('setFilter', (newFilter) => {
      filter = newFilter;
      emitFlightUpdates();
    });
  });
};

module.exports = flightSocket;
