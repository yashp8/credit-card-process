const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const xss = require('xss-clean');
const hpp = require('hpp');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const apiStatusRoute = require('./routes/apiStatusRoute');
const cardprocessRoute = require('./routes/creditCardProcessRoute');

const app = express();
app.use(helmet());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many request from this IP please try again in an hour',
});

app.use('/api', limiter);
app.use(express.json({ limit: '15kb' }));

///////////////////////////
// const allowlist = ['http://example1.com', 'http://example2.com'];
// const corsOptionsDelegate = function (req, callback) {
//   let corsOptions;
//   if (allowlist.indexOf(req.header('Origin')) !== -1) {
//     corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
//   } else {
//     corsOptions = { origin: false }; // disable CORS for this request
//   }
//   callback(null, corsOptions); // callback expects two parameters: error and options
// };
// app.use(cors(corsOptionsDelegate));
///////////////////////////

app.use(cors());
app.use(xss());
app.use(hpp());

app.use('/', apiStatusRoute);
app.use('/api/v1/cardprocess', cardprocessRoute);

app.all('*', (req, res, next) => {
  next(new AppError(`can't find ${req.originalUrl} on server`, 400));
});

app.use(globalErrorHandler);

module.exports = app;