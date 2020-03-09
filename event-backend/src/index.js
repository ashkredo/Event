const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
// Morgan logger middleware function using the given format and options.
const morgan = require('morgan');
// Helmet will set various HTTP headers to help protect app.
const helmet = require('helmet');
// Cross-origin resource sharing (CORS) allows AJAX requests to skip
// the Same-origin policy and access resources from remote hosts.
const cors = require('cors');
const middlewares = require('./middlewares');

const app = express();

// Connects to a MongoDB
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true
});

app.use(morgan('common')); // adds listening logs to console
app.use(helmet()); // secures network log
app.use(
  cors({
    origin: process.env.CORS_ORIGIN
  })
);

// --------Controllers-------- //
app.get('/', (req, res) => {
  res.json({
    message: 'Event API'
  });
});
// catch Not Found (404) & error middlewares
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);
// --------------------------- //

const port = process.env.PORT || 1337;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening at http://localhost:${port}`);
});
