/*
    1、let，const块级作用域
    2、let,const无变量提升
    3、const是常量，如果指向的对象，数组。可以修改对象以及数组，但不能修改字面量。
     */

//块级作用域
try{
    {
        let a = 1
    }
    console.log(a)
}catch(e){
    console.log(e)
}



//实现iife
{
    let temp = 1;
    console.log(temp)
}

//实现for循环中function触发问题
var a = [];
for(let i=0;i<3;i++){
   a[i] = function () {
       console.log(i)
   }
}
a[2]();
