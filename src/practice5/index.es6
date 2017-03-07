// import "babel-polyfill"
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
{
    //栈方法 push pop 会改变原本数组
    let arr = new Array()
    arr.push('testPush1')
    arr.push('testPush2','testPush3')
    console.log(arr);
    arr.pop();
    console.log(arr)
}
{
    //队列方法 shift unshift 会改变原本数组
    let arr = new Array();
    arr.unshift('testShift1');
    arr.unshift('testShift2');
    arr.unshift('testShift3')
    console.log(arr);
    arr.shift()
    console.log(arr)
}
{
    //重排序方法 reverse sort 会改变原本数组
    let arr = [2,1,5,7,3,4];
    arr.reverse();
    console.log(arr)
    let arrCopy1 = arr.concat();//用数组操作方法来实现数组的深拷贝
    let arrCopy2 = arr.concat();//用数组操作方法来实现数组的深拷贝
    arrCopy1.sort()
    console.log(arrCopy1)

    //sort如果第一个参数小于第二个返回负数   sort不传参，默认调用tostring,然后比较字符串
    arrCopy2.sort(function (item1,item2) {
        return item1 - item2
    })
    console.log(arrCopy2)
}
{
    //操作方法splice slice concat 注意splice会改变原来的数组
    let arr = [1,2,3,4,5];
    console.log(arr.concat(6,7),arr.concat([6,7]),arr.concat([6,[7,8]]))//一层数组会被遍历
    console.log(arr.slice(2,3))//第二个参数是截取的位置
    arr.splice(2,1)//第二个参数是个数,返回截取的数组
    console.log(arr)
    arr.splice(2,0,3,3.1)//splice第三个及之后的参数是插入的数据
    console.log(arr)
}
{
    ///位置方法 indexof lastindexOf 第二个参数都是查找的起始点
    let arr = [1,2,3,4,5,6];
    console.log(arr.indexOf(2,4))
    console.log(arr.lastIndexOf(4,4))
}
{
    //迭代方法 every filter forEach map some 参数均是（item,index,array）

    let arr = [1,2,3,4,5,6];
    //every,遍历每一项 如果均返回true，则结果返回true,如果某一项没返回true,终止递归，返回false
    let everyResult = arr.every(function (item,index,array) {
        return true
    })
    console.log(everyResult)

    //filter 运行每一项 返回结果为true的项组成数组
    let filterResult = arr.filter(function (item,index,arr) {
        if(item < 4 ) return true
    })
    console.log(filterResult)
    
    //forEach遍历每一项，无返回值
    let forEachResult = arr.forEach(function (item,index,array) {
    })

    //map 返回每次函数调用的结果组成的数组,没有返回则返回数组该项为undefined
    var mapResult = arr.map(function (item,index,array) {
        return Math.pow(item,2)
    })
    console.log(mapResult)

    //some 迭代每一项，如果有一项返回true 则返回true

    let someResult = arr.some(function (item,index,array) {
        if(item == 1) return true
    })
    console.log(someResult)

}
{
    //归并方法 reduce reduceRight
    let arr = [1,2,3,4,5,6,7];
    //reduce 第一次执行 prev是数组第一项
    let sum = arr.reduce(function (prev,cur,index,array) {
        return prev + cur;
    })
    console.log(sum)
}

//ES6
{
    //数组实例的find()和findIndex()查找到第一个返回为true的值终止递归，find返回数值，findindx返回位置
    let arr = [5,6,7,8,9,10];
    let result = arr.find(function(value,index,arr){
        return value > 7
    })
    console.log(result)
    result = arr.findIndex(function (value,index,arr) {
        return value > 7　
    })
    console.log(result)
}
{
    //数组实例的entries()，keys()和values(),数组支持for....of,用作遍历
    let arr = [ 5,6,7,8,9 ];

    for(let index of arr.keys()){
        console.log(index)
    }
    [1, 2, 3].includes(3, 3);
    console.log(arr.keys())
}
