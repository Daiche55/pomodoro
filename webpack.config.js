const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, "js/packs/app.tsx"),
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: '[name].js',
  },
  devServer: {
    open: true,
    port: 3000,
    contentBase: path.resolve(__dirname, 'public')
  },
  devtool: 'eval',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
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
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            }
          },
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
    ]
  }
};
