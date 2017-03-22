const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
var entry = {};
var filelist;
var walkSync = function(dir, filelist) {
    var fs = fs || require('fs'),
        files = fs.readdirSync(dir);
    filelist = filelist || [];
    files.forEach(function(file) {
        if (fs.statSync(dir + file).isDirectory()) {
            filelist = walkSync(dir + file + '/', filelist);
        }
        else {
            if(/(.es6)$/.test(file)){
                filelist.push(dir + file);
            }
        }
    });
    return filelist;
};

filelist = walkSync(path.join(__dirname , 'src/'),[])
filelist.forEach(function(item,index){
    var i = index + 1;
    entry['practice' + i] = item
})

const config = {

    entry: entry,
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
                exclude: /node_modules/,
                include: /src/
            }
        ],


    },
    devtool: 'source-map',
    plugins: {

    }
}

module.exports = config;
