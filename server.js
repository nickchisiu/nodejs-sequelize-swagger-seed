'use strict';

const express    = require('express');
const swagger    = require('./lib/swagger');
const bodyParser = require('body-parser');
const db         = require('./app/models');
const config     = require('./lib/config')();

const app        = express();

app.set('view engine', 'html');
app.set('views', 'public');
app.set('port', config.api.port);

// database
db.sequelize.sync({ force : config.db.wipe }).then(() => {
  console.log('Database synced' +  // eslint-disable-line no-console
    `${config.db.wipe ? ' - data it\'s wiped & schema recreated' : ''}`);
});

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended : true
}));

// enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, PATCH, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, api_key, Authorization, Referer');
  next();
});

// init swagger
if (config.environment === 'local' || config.environment === 'dev') {
  swagger(app);
}

// init server
app.listen(config.api.port, () => {
  console.log(`listening on port ${config.api.port}`); // eslint-disable-line no-console
});

// load API routes
require('./app/controllers')(app);
