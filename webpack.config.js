import path from "path";
import webpack from "webpack";

export const Config = {
  entry: {
    index: path.join(__dirname, "src", "js", "index.js")
  },
  output: {
    filename: "[name].js"
  },
  resolve: {
    modulesDirectories: ["node_modules"],
    extensions: ["", "js"]
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true
      }
    })
  ]
};
