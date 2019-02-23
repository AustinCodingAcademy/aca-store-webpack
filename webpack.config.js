const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
entry: './public/js/index.js', //where is your starting .js file
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    },
    {
      test: /\.html$/,
      use: [
        {
          loader: "html-loader"
        }
      ]
    }
  ]
},
plugins: [
  new HtmlWebPackPlugin({
    template: "./public/index.html", //where is the html file that the server should load
    filename: "./index.html"
  })
]
};
