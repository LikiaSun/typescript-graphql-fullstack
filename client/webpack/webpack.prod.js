/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const merge = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const PurifyCSS = require("purifycss-webpack");
const glob = require("glob-all");
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = merge(commonConfig, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[contenthash].js",
    chunkFilename: "[name].[contenthash].js",
  },
  devtool: "cheap-module-source-map",
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
        },
      },
    },
  },
  plugins: [
    new PurifyCSS({
      paths: glob.sync([
        path.resolve(__dirname, "..", "src/*.html"),
        path.resolve(__dirname, "..", "src/*.ts"),
        path.resolve(__dirname, "..", "src/**/*.tsx"),
      ]),
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
});
