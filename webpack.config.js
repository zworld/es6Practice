const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
const HappyPack = require('happypack');
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
    var fileReg = /practice[^//]+/;
    var currentFile = item.match(fileReg)[0];
    console.log(currentFile)
    entry[currentFile] = item
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
                loader: 'happypack/loader',
                exclude: /node_modules/,
                include: /src/
            }
        ],


    },
    devtool: 'source-map',
    plugins: [
        new HappyPack({
            threads: 4,
            loaders: [
                {
                    path: 'babel',
                    query: {
                        presets: ["es2015"],
                        plugins: ["transform-runtime"],
                        ignore: [
                            "./src/js/directive/datePicker.js"
                        ]
                    }
                }]
        }),
    ]
}

module.exports = config;
