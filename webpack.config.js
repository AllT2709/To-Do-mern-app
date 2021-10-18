const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const isDev = process.env.NODE_ENV === "development";

module.exports = {
  entry: "./client/index.js",
  output: {
    filename: "main.js",
    //path: path.resolve(__dirname, "./server/public/dist"),
    path: isDev
      ? path.resolve(__dirname, "./dist")
      : path.resolve(__dirname, "./server/public/dist"),
  },
  resolve: {
    extensions: [".jsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./client/public/index.html",
      filename: "index.html",
    }),
  ],
};
