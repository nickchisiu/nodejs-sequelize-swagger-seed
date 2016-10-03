'use strict';

const appRoot  = require('app-root-path');
const walkSync = require('walk-sync');

const req = require;

module.exports = (app) => {
  const paths = walkSync(`${appRoot}/app/controllers`, {
    globs  : ['**/*.js'],
    ignore : ['index.js', '**/lib/*.js', '**/tests/*.js']
  });

  paths.forEach((path) => {
    req(`${appRoot}/app/controllers/${path}`)(app);
  });
};
