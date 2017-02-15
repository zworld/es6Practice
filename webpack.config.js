const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
const entry = {}
// fs.readdir(path.join(__dirname,'src'),function(err, data){
//     if(err){
//         console.log(__dirname,err)
//     }else{
//         data.forEach(item => {
//             fs.readdir('src/'+item,function(err,data){
//                if(err){
//                    console.log(err)
//                }else{
//                    var key = item;
//                    data.forEach(item => {
//                         if(/(.es6)$/.test(item)){
//                             entry[key] = path.join(__dirname,'src',key,item)
//                         }
//                    })
//                }
//             })
//         })
//     }
// })
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
    console.log(filelist)
    return filelist;
};
walkSync(path.join(__dirname , 'src/'))
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
                exclude: /node_modules/
            }
        ],


    },
    plugins: {

    }
}

module.exports = config;
