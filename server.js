const express = require('express');
const helmet = require('helmet'); // helmet is used here to secure the headers
const morgan = require('morgan'); // logs all the requests
const cors = require('cors');
const appConfig = require('./config');
const logger = require('./custom-logger');

const app = express();

// To access POST query params
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(helmet());
app.use(cors());
app.use(express.static('UI'));

// Logging all the Requests using morgan
app.use(
  morgan(
    ':date[clf] :user-agent :method :referrer :remote-addr :remote-user :url :status :res[content-length] - :response-time ms',
    {
      stream: { write: (message) => logger.info(message) },
    },
  ),
);

const indexRouter = require('./routes/index.js');

app.use('/', indexRouter);

app.set('port', appConfig.port);

app.listen(appConfig.port, () => {
  logger.info(
    `Clips running at http://localhost:${appConfig.port}`,
  );
});
