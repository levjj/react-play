module.exports = {
  entry: [
    'babel/polyfill',
    './app/app.js'
  ],
  output: {
    publicPath: '/',
    filename: 'build/main.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel?optional[]=runtime&stage=0'}
    ]
  },
  debug: true
};
