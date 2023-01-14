const express = require('express');

const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.get('/api/v1/user', (req, res) => {
  res.json({
    message: 'Hello from server!',
  });
});

app.listen(4000, () => {
  console.log('Listening on port 4000');
});
