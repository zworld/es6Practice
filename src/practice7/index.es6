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

    {
        //callee.caller获取调用该函数的函数，如果没有返回undefind。callee获取调用当前执行的函数。需要在非严格模式下使用
        function a() {
            console.log(arguments.callee)
            console.log(arguments.callee.caller)
        }
        function b(){
            a()
        }
        b()

    }

}

//ES6
{
    {
        //ES6 允许为函数的参数设置默认值，即直接写在参数定义的后面
        function log(x,y='world') {
            console.log(`${x} ${y}`)
        }
        log('hello')

        //与解构赋值默认值结合使用
        function foo({x, y = 5}) {
            console.log(x, y);
        }
        foo({x:6})

        //第二个参数是对象，如果第二个参数没有默认值，则必须传个对象进去，否则报错
        function fetch(url, { body = '', method = 'GET', headers = {} }) {
            console.log(method);
        }
        fetch('http://example.com', {})
        try{
            fetch('http')
        }catch(e){
            console.log(e)
        }

        //第二个参数是对象，第二个参数申明默认值，则不会出现报错的情况
        function f(url, { body = '', method = 'GET', headers = {} } = {}) {
            console.log(method);
        }
        f('test')
    }
    {
        //函数参数对象结构的区别

        //没传值或者传值没有x,y，都把x,y默认赋值
        function m1({x = 0, y = 0} = {}) {
            return [x, y];
        }

        //如果没传值，则默认为{x: 0,y: 0},如果传值了后面的的默认值就忽略
        function m2({x, y} = { x: 0, y: 0 }) {
            return [x, y];
        }
        console.log(m1(),m2());
        console.log(m1({}),m2({}))
    }
    {
        //作用域
        // 一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域（context）。
        // 等到初始化结束，这个作用域就会消失。这种语法行为，在不设置参数默认值时，是不会出现的
        let x = 1;
        function f(x,y=x){
            console.log(y)
        }
        f();
        f(2)

        let foo = 'outer';
        function bar(func = (x=foo) => x) {
            let foo = 'inner';
            console.log(func()); // outer
        }
        bar()
    }
}