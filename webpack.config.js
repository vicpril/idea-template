const ExtractTextPlugin = require("extract-text-webpack-plugin");

const path = require("path");

module.exports = {
   entry: "./src/app.js",
   output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js"
   },
   devServer: {
//       compress: true,
      disableHostCheck: true,   // That solved it
//       contentBase: '/public/',
// //       port: 3000
     
   },      
   module: {
      rules: [
         {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
               fallback: "style-loader",
               use: ["css-loader", "sass-loader"]
            })
         }
      ]
   },
   plugins: [new ExtractTextPlugin("style.css")]
};
