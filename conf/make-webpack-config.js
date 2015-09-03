var fs = require("fs");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

function extractForProduction(loaders) {
  return ExtractTextPlugin.extract("style", loaders.substr(loaders.indexOf("!")));
}

module.exports = function(options) {
  options.lint = fs.existsSync(__dirname + "/../.eslintrc") && options.lint !== false;

  var localIdentName = options.production ? "[hash:base64]" : "[path]-[local]-[hash:base64:5]";
  var cssLoaders = "style!css?localIdentName=" + localIdentName + "!autoprefixer?browsers=last 2 versions";
  var scssLoaders = cssLoaders + "!sass";
  var sassLoaders = scssLoaders + "?indentedSyntax=sass";
  var lessLoaders = cssLoaders + "!less";

  if (options.production) {
    cssLoaders = extractForProduction(cssLoaders);
    sassLoaders = extractForProduction(sassLoaders);
    scssLoaders = extractForProduction(scssLoaders);
    lessLoaders = extractForProduction(lessLoaders);
  }

  //var jsLoaders = ["babel-loader?{\"stage\":0, \"optional\": [\"bluebirdCoroutines\"]}"];
  //var jsLoaders = ["babel-loader?plugins=babel-plugin-rewire&stage=0&optional[]=bluebirdCoroutines"];
  var jsLoaders = ["babel-loader?stage=0&optional[]=bluebirdCoroutines"];

  return {
    entry: {
     vendor: [
        "webpack-dev-server/client?http://localhost:8080",
        "alt",
        "lodash",
        "jquery",
        "react",
        "react-router",
        "react-bootstrap",
        "react-swipe",
        "swipe-js-iso"
      ],
      app: [
        "webpack/hot/dev-server",
        "./app/index.jsx",
        "./app/css/base.scss"
      ]
    },
    debug: !options.production,
    devtool: options.devtool,
    output: {
      path: options.production ? "./dist" : "./build",
      //publicPath: options.production ? "" : "http://192.168.6.100:8080/",
      filename: options.production ? "[name].[hash].js" : "[name].js"
    },
    module: {
      preLoaders: options.lint ? [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "eslint"
        }
      ] : [],
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loaders: options.production ? jsLoaders : ["react-hot"].concat(jsLoaders)
        }, {
          test: /\.css$/,
          loader: cssLoaders
        }, 
        {
          test: /\.sass$/,
          loader: sassLoaders
        },
        {
          test: /\.scss$/,
          loader: scssLoaders
        }, {
          test: /\.less$/,
          loader: lessLoaders
        }, {
          test: /\.png$/,
          loader: "url?limit=100000&mimetype=image/png"
        }, {
          test: /\.svg$/,
          loader: "url?limit=100000&mimetype=image/svg+xml"
        }, {
          test: /\.gif$/,
          loader: "url?limit=100000&mimetype=image/gif"
        }, {
          test: /\.jpg$/,
          loader: "file"
        }, {
          test: /\.woff2$/,
          loader: "file"
        }, {
          test: /\.eot$/,
          loader: "file"
        }, {
          test: /\.woff$/,
          loader: "file"
        }, {
          test: /\.otf$/,
          loader: "file"
        }, {
          test: /\.ttf$/,
          loader: "file"
        }
      ]
    },
    resolve: {
      extensions: ["", ".js", ".jsx", ".sass", ".scss", ".less", ".css"]
    },
    plugins: options.production ? [
      // Important to keep React file size down
      new webpack.DefinePlugin({
        "process.env": {
          "NODE_ENV": JSON.stringify("production")
        }
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new ExtractTextPlugin("app.[hash].css"),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: "./conf/tmpl.html",
        production: true
      })
    ] : [
      new HtmlWebpackPlugin({
        template: "./conf/tmpl.html"
      })
    ]
  };
};
