var path = require('path');

module.exports = {
    entry: "./js/app.js",
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, 'js')
    },
    mode: 'development',
    watch: true,
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {loader: 'css-loader', options: {sourceMap: true}},
                    {loader: 'sass-loader', options: {sourceMap: false}}
                ]
            }
        ]
    }
}