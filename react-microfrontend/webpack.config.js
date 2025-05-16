const path = require('path');

module.exports = {
  mode: 'development', // Set to development for auto rebuild
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'microfrontend.js',
    library: 'MyMicrofrontend',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'this',
    publicPath: 'http://localhost:3001/' // Important for remote loading
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    compress: true,
    port: 3001,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    hot: true,
  }
};
