const path = require('path');
const webpack = require('webpack');

const config = {
    entry: {
        'practice1': path.join(__dirname , '/src/practice1/index.es6'),
        'practice2': path.join(__dirname , '/src/practice2/index.es6')
    },
    output:{
        path:  path.join(__dirname , 'src'),
        filename: "[name]/bundle.js"
        // chunkFilename设置
    },
    module: {
        loaders: [
        //转化es6语法
            {
                test: /\.(js|es6)$/,
                loader: 'babel',
                exclude: /node_modules/
            }
        ],


    },
    plugins: {

    }
}

module.exports = config;
