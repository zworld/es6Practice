// import "babel-polyfill"
/*
对象操作
 */

//ES5
{
    //Object.create(obj.prototype)
    let obj = Object.create({x:1,y:2})//等价于function f(){};f.prototype = {x:1,y:2};obj = new f()
    console.log(obj)
    //delete断开属性和宿主对象的关系，不会去操作属性中的属性
    let obj1 = {x:{test:1},y:1};
    let x = obj1.x;
    delete(obj1.x);
    console.log(obj1,x);

}

{
    //监测属性
    //in 监测属性是否是对象的自有属性或继承属性
    function f(){
        this.name = 'test'
    }
    f.prototype = {height:100}
   let obj = new f();
    console.log('name' in obj, 'height' in obj);

    //hasOwnProperty 检测属性是否是对象的自有属性
    console.log(obj.hasOwnProperty('name'),obj.hasOwnProperty('height'));

    //propertyIsEnumerable() 检测属性是否是对象的自有属性并且可以枚举
    let obj1 = Object.prototype;
    console.log(obj1.hasOwnProperty('toString'),obj1.propertyIsEnumerable('toString'))

}

{
    //枚举 for...in...对象继承的内置方法不可枚举,PS一定是内置！
    let proto = {
        a: function () {

        },
        b: 'b'
    }
    let obj = Object.create(proto);
    obj.c = 'c'
    obj.d = function () {
        
    }
    for(let key in obj){
        console.log(key)
    }
    for(let key in obj){
        //排除继承属性
        if(obj.hasOwnProperty(key)) continue

        //排除function
        if(typeof obj[key] === "function") continue

        console.log('自身属性且不是funtion:' + key)
    }

    //Objcet.keys()返回对象中自有可枚举的属性组成一个数组
    let obj1 = Object.defineProperties({},{
        x:{value:1,enumerable:false},
    })
    console.log(Object.keys(obj1));

    //Object.getOwnPropertyNames() 返回对象中所有自有属性，包括可枚举和不可枚举
    console.log(Object.getOwnPropertyNames(obj1))
}



