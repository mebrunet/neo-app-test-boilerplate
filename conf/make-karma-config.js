var webpackConfig = require("./webpack.config.js");

module.exports = function(options) {
  var karmaConfig = {
    frameworks: ["mocha", "chai"],

    browsers: ["PhantomJS"],

    files: [
      // This shim adds .bind to PhantomJS
      "./phantomjs-shim.js",
      "../node_modules/babel-core/browser-polyfill.js",
      "./test-index.js"
    ],

    preprocessors: {
      "./test-index.js": ["webpack"]
    },

    webpackMiddleware: {
        noInfo: true
    },

    reporters: ["nyan"],

    plugins: [
      "karma-webpack",
      "karma-mocha",
      "karma-chai",
      "karma-phantomjs-launcher",
      "karma-mocha-reporter",
      "karma-nyan-reporter"
    ]
  };

  if (options.coverage) {
    // Needs to load first to prevent linting issues
    webpackConfig.module.preLoaders = [
      {
        test: /\.jsx?$/,
        exclude: /(__tests__|node_modules)/,
        loader: "isparta-instrumenter-loader"
      }
    ].concat(webpackConfig.module.preLoaders);
    karmaConfig.plugins.push("karma-coverage");

    karmaConfig.coverageReporter = {
      dir: "../coverage",
      type: "html"
      //reporters: options.coverageReporters || [
        //{ type: "text" },
      //]
    };

    karmaConfig.reporters.push("coverage");
  }

  if (options.notify) {
    karmaConfig.reporters.push("notify");
    karmaConfig.plugins.push("karma-notify-reporter");
  }

  karmaConfig.webpack = webpackConfig;

  return karmaConfig;
};
