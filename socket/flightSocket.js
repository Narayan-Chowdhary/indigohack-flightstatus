// Import necessary modules and functions
const { sendEmail } = require('../utils/email/sendMail');
const Flight = require("../models/Flight");

// Array to store the previous state of flights for comparison
let previousFlights = [];

// Function to handle socket connections and flight updates
const flightSocket = (io) => {
  io.on('connection', (socket) => {

    // Variables for interval and filtering flights
    let interval;
    let filter = 'All Flights';
    let alphanumericRegex = /^[a-zA-Z0-9\s]+$/;
    let alphabeticRegex = /^[a-zA-Z\s]+$/;

    // Function to emit flight updates to the client
    const emitFlightUpdates = async () => {
      try {
        // Fetch all flights from the database
        const flights = await Flight.find();
        let filteredFlights;
        let newFlight  = null;
        // Filter flights based on the current filter
        if (filter === 'All Flights') {
          filteredFlights = flights;
        } else if (alphabeticRegex.test(filter)) {
          filteredFlights = flights.filter(flight => flight.status?.toLowerCase() === filter?.toLowerCase());
          newFlight = filteredFlights
        } else if (alphanumericRegex.test(filter)) {
          filteredFlights = flights.filter(flight => flight?.flight_id?.toLowerCase() === filter?.toLowerCase());
          newFlight = filteredFlights
        } else {
          filteredFlights = "No Such Flight Found";
        }

        // Check if the flights data has changed
        if ( JSON.stringify(flights) !== JSON.stringify(previousFlights)) {
          // Update previous flights and send email notification
          previousFlights = flights;
          const subject = 'Flight Status Update';
          const recipient = process.env.RECIEVER_EMAIL;
          sendEmail(recipient, subject,   filteredFlights);

          // Emit updated flights to the client
          socket.emit('flightStatusUpdate', filteredFlights);
        }

        // Emit updated flights to the client
        socket.emit('flightStatusUpdate', filteredFlights);
      } catch (err) {
        console.error(err);
        socket.emit('flightStatusUpdate', { error: 'Failed to fetch flight data' });
      }
    };

    // Set interval to emit flight updates every 3000ms (3 seconds)
    interval = setInterval(emitFlightUpdates, 3000);

    // Handle client disconnection
    socket.on('disconnect', () => {
      console.log('Client disconnected');
      if (interval) {
        clearInterval(interval);
      }
    });

    // Handle filter updates from the client
    socket.on('setFilter', (newFilter) => {
      filter = newFilter;
      emitFlightUpdates();
    });
  });
};

// Export the flightSocket function
module.exports = flightSocket;
