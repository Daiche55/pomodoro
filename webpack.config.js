const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/app.js'),
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: '[name].js',
  },
  devtool: false,
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { 
          loader: 'babel-loader', 
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          { loader: "babel-loader" },
          { 
            loader: 'ts-loader',
          }
        ],
      }
    ]
  }
};
