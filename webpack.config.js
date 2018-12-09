var path = require('path');

module.exports = {
    entry: "./js/app.js",       //ten plik jest wczytywany
    output: {
        filename: "out.js",     //tutaj output
        path: path.resolve(__dirname, 'js')     //ścieżka do pliku out
    },
    mode: 'development',    //lub wersja produkcyjna: 'production'
    watch: true,
    devtool: 'inline-source-map',       //NIE: 'source-map', source-map tworzy plik out.map.js
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
                // use: ['style-loader', 'css-loader', 'sass-loader']      //tu przed css i sass chcemy też sourceMap
                //skopiować z githuba Damiana w warsztacie
                use: [
                    'style-loader',
                    {loader: 'css-loader', options: {sourceMap: true}},
                    {loader: 'sass-loader', options: {sourceMap: false}}
                ]
            }
        ]
    }
}