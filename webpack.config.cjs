const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  devtool: 'inline-source-map',
  // plugins: [
  //     new HtmlWebpackPlugin({
  //         title: 'Todo'
  //     })
  // ],
  module: {
    rules: [
      {
        test: /\.css|less|sass$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(m|c)?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }],
            ],
            plugins: [
              ['@babel/plugin-transform-runtime'],
            ],
          },
        },
      },
    ],
  },
  output: {
    filename: 'js/bundle.js',
    assetModuleFilename: 'assets/[hash][ext]',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
