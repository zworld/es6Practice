/*
function的操作
 */

//ES6
{
    //默认变量，当该变量没有赋值时使用默认值
    let fun = function (x,y=1){

        return x+y

    }
    console.log(fun(3))

    //默认值为变量
    function foo(m=n+1) {
        console.log(m)
    }
    let n = 1;
    foo()

}
{
    //rest...只能放在最后
    //reset参数 ...形式，rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中，...将字面量变成数组。
    function add(...values){
        let sum = 0;
        for(let value of values){
            sum += value;
        }
        console.log(sum)
    }
    add(6,5,4)

    //...扩展运算符，将数组变成字面量
    console.log(1,...[4,5]);

    //合并数组
    console.log([1,2,...[3,4,5]])
    //与结构一起赋值
    let list = [2,3,4,5];
    let[a,...rest] = list;
    console.log(a,rest);

    //结构字符串
    console.log([...'helloworld'])
}







//ES5
//caller callee
