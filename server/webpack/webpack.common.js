const path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");

module.exports = {
  entry: ["./src/main.ts"],
  target: "node",
  devtool: "inline-source-map",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "..", "dist"),
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, "..", ".env"),
    }),
    new CleanWebpackPlugin(),
    new webpack.IgnorePlugin(/^hiredis$/),
    new HardSourceWebpackPlugin(),
  ],
};
