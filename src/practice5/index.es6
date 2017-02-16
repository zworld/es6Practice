/*
数组操作
 */

//ES5
{
    //监测是否是数组 1、Object.prototype.toString.call() 2、Array.isArray()
    let arr = [1,2,3,4,5,6];
    console.log(Object.prototype.toString.call(arr) == '[object Array]',Array.isArray(arr))
}
{
    //转换方法
    let arr = [1,2,3,4];
    console.log(arr.toString())//数组转成字符串用逗号隔开
    console.log(arr.valueOf())//返回数组
    console.log(arr.join('!'))//返回！分割的字符串
}