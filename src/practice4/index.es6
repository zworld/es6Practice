/*
Math在es5和es6中的操作,除开少有的数学操作。
Number的操作
 */

//es5
{
    //math.PI
    console.log(Math.PI)

    //max min
    console.log(Math.max(1,2,3,4,5),Math.max.apply(this,[1,2,3,4,5]))
    console.log(Math.min(1,2,3,4,5),Math.min.apply(this,[1,2,3,4,5]))

    //ceil,floor,round
    console.log(Math.ceil(25.1),Math.ceil(25.9))//向上取整
    console.log(Math.floor(25.1),Math.floor(25.9))//向下取整
    console.log(Math.round(-1.5),Math.round(-1.6))//四舍五入 注意负数.5是变成较大负整数
    //random返回大于等于0小于1的随机数
    console.log(Math.random())
    //abs,pow,sqrt
    console.log(Math.abs(-1))//绝对值
    console.log(Math.pow(2,4))//幂运算
    console.log(Math.sqrt(9))//平方根
}
//es6 Math
{
    //sign判断正负零
    console.log(Math.sign(-1),Math.sign(0),Math.sign(1))
    
}

//es5 Number
{
    //toString()参数是进制
    let num = 10;
    console.log(num.toString(),num.toString(10),num.toString(8),num.toString(16))
    //toFixed几位小数
    console.log(num.toFixed(2))
    //toPrecision(n)整个数字几位
    console.log(num.toPrecision(1),num.toPrecision(2),num.toPrecision(3),num.toPrecision(4))
}
//es6 Number全局对象
{
    //isFinite isNaN
    console.log(Number.isFinite(1),Number.isFinite(Infinity))
    console.log(Number.isNaN(1),Number.isNaN(NaN),Number.isNaN(true),Number.isNaN('test'))
}