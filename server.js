const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
require('dotenv').config();
const cors = require('cors');
const { connectDB } = require('./config/db');
const flightRoutes = require('./routes/flightRoutes'); 
const flightSocket = require('./socket/flightSocket');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*',
  }
});

app.use(cors());
app.use(express.json()); 
connectDB();

app.use('/api/flight', flightRoutes);

flightSocket(io);

const PORT =  process.env.PORT;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
