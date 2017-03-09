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

{
    //getter,setter存取器属性，区别数据属性。若只有getter方法，那么它只是个可读属性，如果只有setter方法，那么它只是可写属性，读取只得到undefined
    let obj = {
        //x,y是普通可读写的数据属性
        x: 1,
        y: 1,
        //r是存取性属性
        get r(){
            return this.x + this.y
        },
        set r(val){
            this.x = val/2;
            this.y = val/2
        },
        //w是只写属性
        set w(val){
            this.x *= 2;
            this.y *=2;
        },
        //s是只取属性
        get s(){
            return 'onlyRead'
        }
    }
    console.log('r:' + obj.r)
    obj.r = 4
    console.log('设置r=4后,r=' + obj.r)
    console.log('获取只存属性w：' + obj.w)
    // try{obj.s = 'change';}catch(e){
    //     console.log( '将只取属性s设置为"change"后,报错:' + e)
    // }
}

{
     /*
     属性的特性
    */

    //数据属性 value,writable,enumerable,configurable; 存取属性 get set enumerable configurable。用Object.getOwnpropertyDescriptor()获取
    let obj = {
        x:1,
        get y(){},
        set z(val){}
    }
    console.log(Object.getOwnPropertyDescriptor(obj,'x'),Object.getOwnPropertyDescriptor(obj,'y'),Object.getOwnPropertyDescriptor(obj,'z'))

    //设置属性特性Object.defineProperty()
    let obj1 = {}
    Object.defineProperty(obj1,'x',{
        value:1,
        writable:true,
        enumerable: false,
        configurable: true
    })
    Object.defineProperty(obj1,'y',{
        get: function () {
        },
        set:function () {
        },
        enumerable: false,
        configurable: true
    })
    console.log(Object.getOwnPropertyDescriptor(obj1,'x'),Object.getOwnPropertyDescriptor(obj1,'y'))
    //同时修改或添加多个属性 Object.defineProperties(obj,configObj)
}

{
    /*
     对象的三个属性
     */
    {
        //原型属性 检测一个对象是否是另外一个对象的原型 isPrototypeOf
        let pro = {x:1};
        let fun = function () {
        }
        fun.prototype = pro;
        let obj = new fun();
        console.log(pro.isPrototypeOf(obj))
    }
    {
        //类属性

        //instanceOf  判断Array的时候会有问题，因为在iframe中window实例的array和在非window实例下的array是不同的
        let str = 'testString';
        console.log( str instanceof Object && str instanceof String)

        //用Object.prototype.toString.call()来处理
        function classOf(o) {
            return Object.prototype.toString.call(o).slice(8,-1)
        }
        console.log(classOf(new Date),classOf(/\.test/),classOf(new Array()),classOf(new Object()))
    }
    {
        //可扩展性
        //Object.isExtensible(),Object.preventExtensions(),阻止添加属性,但可以删除
        let testExtensible = {x:1}
        console.log(Object.isExtensible(testExtensible));
        Object.preventExtensions(testExtensible);

        //Object.seal(),Object.seal()，在preventExtensions()基础上让属性不可配置，使得属性不可配置也不可删除,修改值那些不影响
        let testSeal = {x:1}
        console.log(Object.isSealed(testSeal))
        Object.seal(testSeal);

        //Object.freeze(),Object.isFrozen(),在seal基础上增加了不可写的属性
        let testFreeze = {x:1};
        console.log(Object.freeze(testFreeze));
        Object.freeze(testFreeze);

    }


}

{
    //序列化对象 JSON.stringify(),JSON.parse(),主要用来实现深拷贝
    let obj= {x:1}
    let toJSON = JSON.stringify(obj);
    console.log(toJSON)
    let deepCopy = JSON.parse(toJSON)
    console.log(deepCopy)
}



