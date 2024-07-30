# Project Title
Indigo Flight Status

# Description

This project aims to develop a system that provides real-time flight status updates and notifications to passengers. The system displays current flight status, including delays, cancellations, and gate changes, and sends notifications via email.


## Features

* Real-time Updates: Display current flight status (delays, cancellations, gate changes).
* Push Notifications: Send notifications for flight status changes via email.
* Integration with Airport Systems: Pull data from airport databases for accurate information (using mock data).

## Features

### Technologies Used
#### Frontend
* React.js: A JavaScript library for building user interfaces.
* Socket.io: A library for real-time, bidirectional and event-based communication.
* TailwindCSS: A utility-first CSS framework for rapid UI development.

#### Backend
* Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine.
* Express.js: A web application framework for Node.js, designed for building web applications and APIs.
* Socket.io: Used for real-time communication between the client and server.
* NodeMailer: A module for Node.js applications to send email.



### Dependancies

##### Backend
* NodeJs Version :- v18.20.4;
* MongoDB Version :- v3.6.8;


##### Frontend
* ReactJs Version :- v18.3.1;
* NodeJs Version :- v18.20.4;

* We have used Static data for the time being so please run this command to make program run 

### Executing program

##### Backend
* Take Clone from github :- 
    * Branch-Name :- indigohack-backend;
    * Use Command one by one in your terminal :-
       ```
        git clone https://github.com/Narayan-Chowdhary/indigohack-flightstatus.git 
        git checkout indigohack-backend
        git pull origin indigohack-backend
        npm install 
        ```

* Create .env file and add credetial in that
    ```
    MONGODB_URI = "Your MongoDB URI" 
    PORT = 5050 || what ever of you choice
    SENDER_EMAIL = "GMAIL address"
    SENDER_PASSWORD =  "gmail Password || App Password || App passkey"
    RECIEVER_EMAIL = "Mail address whome you wanted to mail"
    ```
* To start server run Commands
    
    ```
    node insertData.js
    node server.js
    ```

##### Frontend
* Take Clone from github :- 
    * Branch-Name :- indigohack-frontend;
    * Use Command one by one in your terminal :-
        ```
        git clone https://github.com/Narayan-Chowdhary/indigohack-flightstatus.git 
        git checkout indigohack-frontend
        git pull origin indigohack-frontend
        npm install 
        ```
* To start server run Command   
    ```
    npm start
    ```



## Authors

    Narayan Chowdhary
    narayan97.nk@gmail.com



