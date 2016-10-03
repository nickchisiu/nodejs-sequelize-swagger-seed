#!/bin/sh

set -e

if [[ "$NODE_ENV" = "local" || -z $NODE_ENV ]]; then
   ./node_modules/.bin/nodemon -V -e 'js,yml,json' server.js
else
   node server.js
fi