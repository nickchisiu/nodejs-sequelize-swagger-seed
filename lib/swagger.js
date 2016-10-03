'use strict';

const config       = require('./config')();
const swaggerJSDoc = require('swagger-jsdoc');
const express      = require('express');
const appRoot   = require('app-root-path');

const swagger = (app) => {
  const swaggerSpec = swaggerJSDoc({
    swaggerDefinition : config.swagger,
    apis              : [`${appRoot}/app/controllers/**/*.js`]
  });

  app.use('/docs', express.static(`${appRoot}/public/swagger`));

  app.get('/api-docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
};

module.exports = swagger;
