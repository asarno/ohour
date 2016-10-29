// babel registry



require('babel-register')({
  presets: ['es2015', 'react']
  // ignore: false
});

// require('./enzyme.js');
require('./server/server.js');