const express = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies
const cors = require('cors');

const morgan = require('morgan');

const userRoutes = require('./routes/userRoutes');
const loginRoutes = require('./routes/loginRoute');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev')); //middleware to log the request to the console (dev is a preset for morgan to log in a dev style)
}

app.use(cors());
app.use(express.json());

// Setting routes
app.use('/api/v1/register', userRoutes);
app.use('/api/v1/login', loginRoutes);

module.exports = app;
