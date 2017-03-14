import "babel-polyfill"
/*
    函数的操作
 */

//ES5
{
    {
        //判断是否为严格模式
        let strict = (function () {
           return !this
        }())
        console.log(strict)
    }
}
