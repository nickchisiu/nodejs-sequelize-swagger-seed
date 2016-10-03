'use strict';

const walkSync = require('walk-sync');
const appRoot  = require('app-root-path');

describe('Test Suite', () => {
  const paths = walkSync('./app', { globs : ['**/tests/*.js'] });

  paths.forEach(filename => require(`${appRoot}/app/${filename}`)()); // eslint-disable-line global-require, max-len

  before((done) => {
    done();
  });

  after((done) => {
    done();
  });
});
