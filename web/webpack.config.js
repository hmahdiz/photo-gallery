const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const outputPath = path.join(__dirname, "dist");
const assetsPath = path.join(__dirname, "assets");
const pkg = require("./package.json");

module.exports = {
  entry: {
    [pkg.name]: ["./src/index.js"]
  },

  output: {
    path: outputPath,
    filename: "[name].bundle.js",
    sourceMapFilename: "[name].bundle.map"
  },
  devServer: {
    contentBase: "./dist"
  },
  module: {
    rules: [
      // javascript
      {
        test: /\.(jsx|js)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      },

      // html
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },

      // css
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },

      // fonts
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: "file-loader",
        options: {
          name: "fonts/[name].[ext]"
        }
      },

      // images
      {
        test: /\.(png|jpg|gif|svg|jpeg)(\?.*)?$/,
        loader: "url-loader",
        query: {
          limit: 10000
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
      inject: "body",
      favicon: "./public/favicon.ico"
    })
  ]
};
