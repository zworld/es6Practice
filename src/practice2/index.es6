/*
* 变量结构，分为数组结构,对象结构,字符串，函数等解构
* 数组，对象允许嵌套赋值
* 数组，对象属性必须严格等于undefined，默认值才生效
* */
//数组进行结构
{
    let [a,b] = [1,2];
    console.log(a,b);
}
{
    let[x,,y] = [1,2,3]
    console.log(x,y)
}
{
    let[x,[y,z],g] = [1,[2],3]
    console.log(x,y,z,g)
}
{
// 默认值，必须右边严格为undefined才生效
    let[x = 1] = [undefined];
    let[y = 1] = [ null ];
    console.log(x,y)
}
{
    //数组有个length属性
    let{length: len} = 'hello';
    console.log(len);
}

//对象结构，对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。
{
    let{ foo, bar } ={ foo: 'foo' , baz:'baz' };
    console.log(foo,bar)
}
{
    //属性对应赋值，例子中对应变量是f,l 而不是first world,其为模式。实用性不高。
    let{ first: f, last: l }  = { first: 'hello', last: 'world' }
    console.log(f,l)
}
{
    //p是模式，无法赋值
    let obj = {
        p: [
            'Hello',
            { y: 'World' }
        ]
    };

    let { p: [x, { y }] } = obj;
    console.log(x,y)
}
{
    //指定默认值,和数组解构一样，需要严格undefined
    let { x,y=1,z } = { x: 1, z: null }
    console.log(x,y,z)
}
{
    //直接解构对象方法
    let{ cos,sin,floor} = Math;
    console.log(cos,sin,floor);
}
{
    //数组,对象解构
    let{ 0:first, 1:second } = [1,2];
    console.log(first,second)
}

//字符串解构
{
    //赋值
    const[a,b,c] = "123";
    console.log(a,b,c)
    //字符串的length属性
    let{length: len} = "123";
    console.log(len)
}

//函数解构
{
    let arr = [[1,2],[3,4]];
    let arrCopy = arr.map(([a,b]) => a + b);
    console.log(arrCopy)
}
