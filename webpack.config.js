module.exports = {
  entry: './src/App.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: __dirname + '/public',
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        excludes: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css/,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|svg)/,
        loader: 'file-loader'
      }
    ]
  }
}