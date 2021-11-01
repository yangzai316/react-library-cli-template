const path = require('path');
const NeatenTransferWebpackPlugin = require('neaten-transfer-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: './index.js',
    module: {
        rules: [{
            test: /(\.jsx|\.js)$/,
            use: [{
                loader: 'babel-loader'
            }],
            exclude: /node_modules/
        }, {
            test: /(\.less|\.css)$/,
            use: [
                'style-loader',
                'css-loader',
                'less-loader'
            ],
        },]
    },
    plugins: [new NeatenTransferWebpackPlugin({
        from: [{
            path: path.resolve(__dirname, './'),
            name: 'dist'
        }, {
            path: path.resolve(__dirname, './'),
            name: 'package.json'
        }],
        to: {
            path: path.resolve(__dirname, './example/'),
            name: 'hello',
            cover: true
        }
    })],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        library: {
            name: 'hello',
            type: 'umd',
        },
    },
};
