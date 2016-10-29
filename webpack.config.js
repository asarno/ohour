module.exports = {
  entry: './client/main.js',
  output: {
    path: './client',
    filename: 'bundle.js'
  },
  devServer: {
    proxy: {
      '/submit': { target: 'http://localhost:3000', secure: false }
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
}