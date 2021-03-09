const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const colors = require('colors');


/**
 * Import the file which handles the connection to
 * the MongoDB database.
 */
const connectDB = require('./config/db');


/* Declare a new express app */
const app = express();


/* Connection to the database */
connectDB();


/* Dev logging middleware */
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}


/* Enable cors */
app.use(cors());


/* Port where the server is running */
const PORT = process.env.PORT || 5000;


/* Run the server */
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));


/* Handle unhandled promise rejections */
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    /* Close server & exit process */
    /* server.close(() => process.exit(1)); */
  });