let path = require('path')
let ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
  output: { path: path.resolve("assets/build") },
  devtool: "sourcemaps",
  mode: "development",
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: true,
      useTypescriptIncrementalApi: true,
      checkSyntacticErrors: true,
      silent: true,
      formatter: 'codeframe'
}),
  ],
  devServer: {
    historyApiFallback: true
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          { loader: "babel-loader" },
          {
            loader: "@svgr/webpack",
            options: { babel: false }
          }
        ]
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};