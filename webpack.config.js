import path from 'path';

export default {
  devtool: 'eval',
  entry: './index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
            {
                test: /\.(js|jsx)$/,
                loaders: ['babel'],
                exclude: /node_modules/,
                include: __dirname
            }
        ]
  }
};
