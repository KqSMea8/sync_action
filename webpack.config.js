const path = require('path');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    simple: './src/simple/SimpleRoot.bs.js'
  },
  mode: isProd ? 'production' : 'development',
  output: {
    path: path.join(__dirname, "bundledOutputs"),
    filename: '[name].js',
  },
};
