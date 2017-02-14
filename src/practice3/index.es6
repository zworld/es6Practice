/*
    ES5和ES6字符串操作总结
    es5中的操作均返回副本 原字符串不变
 */

//es5总结
{
    let str = "hello world";
    console.log(str.charAt(1));
    console.log(str.charCodeAt(1));
    console.log(str.indexOf('o',5))//indexOf第二个参数包含该位置
    console.log(str.lastIndexOf('o',3),str.lastIndexOf('o',4))//第二个参数指截取字符串前这么多个字符，进行倒数寻找
}
{
    // concat,slice,substr,substring,split,trim,slice,substring第二个参数是截止位置，可以是负数，但不包含在里面
    let str = "hello world";
    console.log(str.concat('xinzhi'),str.concat('xinzhi','!'),str)//concat连接字符串，可传多个参数
    console.log(str.slice(6,11),str.slicestr)
    console.log(str.substring(6,11),str)
    console.log(str.substr(6,5),str)//substr第二个参数是截取的数量
    console.log(str.split(''),str)
    str = ' hello world  '
    console.log(str.length,str.trim(),str.length)
}
{
    let str = "HEllo WOrld"
    //toUpperCase,toLowerCase
    console.log(str.toUpperCase(),str)
    console.log(str.toLowerCase(),str)

}

//ES6
{
    //字符串遍历
    for(let codePoint of 'abc'){
        console.log(codePoint)
    }
    //includes(), startsWith(), endsWith() 返回boolean
    let str = "hello world"
    console.log(str.includes('hello'))
    console.log(str.startsWith('he'),str.startsWith('z'))
    console.log(str.endsWith('ld'),str.endsWith('z'))

    //repeat
    console.log(str.repeat(2))

    //padStart()，padEnd()是ES7语法
    // let padStr = 'pad';
    // console.log(padStr.padStart(6,'add'))
    // console.log(padStr.padEnd(6,'add'))

}
{
    //字符串模板``,${}中可以是任意js运算
    let str = "hello world zhongxinzhi"
    let newStr = `新的字符串: ${ str.split(' ').map(item => `
        <strong>${item}</strong>
    `).join('\n') }`

    console.log(newStr)
}