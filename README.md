# Indigo Flight Status

## Description

This project aims to develop a system that provides real-time flight status updates and notifications to passengers. The system displays current flight status, including delays, cancellations, and gate changes, and sends notifications via email.

## Features

- **Real-time Updates**: Display current flight status (delays, cancellations, gate changes).
- **Push Notifications**: Send notifications for flight status changes via email.
- **Integration with Airport Systems**: Pull data from airport databases for accurate information (using mock data).

## Technologies Used

### Frontend

- **React.js**: A JavaScript library for building user interfaces.
- **Socket.io**: A library for real-time, bidirectional and event-based communication.
- **TailwindCSS**: A utility-first CSS framework for rapid UI development.

### Backend

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js**: A web application framework for Node.js, designed for building web applications and APIs.
- **Socket.io**: Used for real-time communication between the client and server.
- **NodeMailer**: A module for Node.js applications to send email.

## Dependencies

### Backend

- **Node.js Version**: v18.20.4
- **MongoDB Version**: v3.6.8

### Frontend

- **React.js Version**: v18.3.1
- **Node.js Version**: v18.20.4

> **Note:** We have used static data for the time being. Please follow the instructions below to run the program.
> **Note:** Take Pull in Two different folders one for frontend and other for backend.
## Executing Program

### Backend

1. Clone the repository:
    - Branch-Name: `indigohack-backend`
    - Run the following commands in your terminal:
       ```bash
       git clone https://github.com/Narayan-Chowdhary/indigohack-flightstatus.git 
       git checkout indigohack-backend
       git pull origin indigohack-backend
       npm install 
       ```

2. Create a `.env` file and add credentials:
    ```plaintext
    MONGODB_URI="Your MongoDB URI"
    PORT=5050 # or any port of your choice
    SENDER_EMAIL="Your Gmail address"
    SENDER_PASSWORD="Gmail password or app password"
    RECIEVER_EMAIL="Email address to receive notifications"
    ```

3. To Seed mock data and to start the server, run the following commands:
    ```bash
    npm run seed
    npm run dev
    ```

### Frontend

1. Clone the repository:
    - Branch-Name: `indigohack-frontend`
    - Run the following commands in your terminal:
        ```bash
        git clone https://github.com/Narayan-Chowdhary/indigohack-flightstatus.git 
        git checkout indigohack-frontend
        git pull origin indigohack-frontend
        npm install 
        ```

2. To start the server, run the following command:
    ```bash
    npm run dev
    ```

## Authors

- Narayan Chowdhary
  - [Email](mailto:narayan97.nk@gmail.com)
