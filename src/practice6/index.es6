// import "babel-polyfill"
/*
对象操作
 */

//ES5
{
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
}

//ES6
{
    {
        //ES6允许直接写入变量和函数，作为对象的属性和方法。
        let foo = 'bar';
        let baz = {foo};
        console.log(baz)

        function obj(x,y){
            return{x,y}
        }
        console.log(obj(1,2))

        //方法简写
        let o ={
            test(){
                return 'simple to method'
            }
        }
        console.log(o)
    }

    {
        //字面量对象，变量设置属性名表达式
        let key = 'foo'
        let obj = {
            [key]: true
        }
        console.log(obj)
    }

    {
        //对象方法的name属性，返回属性名 用get/set方法 该属性在描述对象上
        let obj = {
            a: function(){},
            get b(){

            },
            set b(val){
            }
        }
        console.log(obj.a.name)
        let desc = Object.getOwnPropertyDescriptor(obj,'b');
        console.log(desc.get.name,desc.set.name)
    }

    {
        //比较方法 Object.is(),区别 在ES5中，NaN不等于自身，+0等于-0
        console.log(Object.is(NaN,NaN),NaN===NaN,Object.is(+0,-0),+0===-0)

    }

    {
        //Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）
        //Object.assign方法实行的是浅拷贝，而不是深拷贝。也就是说，如果源对象某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用。
        let target = {a:1};
        let source1 = {a:2,b:1}
        let source2 = {c:3}
        console.log(Object.assign(target,source1,source2))

        let obj = {}
        Object.defineProperty(obj,'invisible',{
            value: '1',
            enumerable: false
        })
        console.log(obj,Object.assign({},obj))
    }

    {
        //属性的遍历

        let obj = {};
        Object.defineProperties(obj,{
            x: {value: 1,enumerable:false},
            y: {value: 2,enumerable:true}
        })
        console.log(obj)

        //Object.keys返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含Symbol属性）
        console.log(Object.keys(obj))
        //Object.values方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值
        console.log(Object.values(obj))
        //Object.entries方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组
        console.log(Object.entries(obj))
        //Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（不含Symbol属性，但是包括不可枚举属性）
        console.log(Object.getOwnPropertyNames(obj))

    }

    {
        //对象原型的设置 Object.setPrototypeOf()
        let obj = {x:1}
        let proto = {y:2}
        Object.setPrototypeOf(obj,proto)
        console.log(obj.y,Object.getPrototypeOf(obj))
    }

    {
        //对象扩展...

        //解构赋值
        let{x,y,...z} = {x:1,y:2,a:3,b:4}
        console.log(x,y,z)
        //解构赋值的拷贝是浅拷贝，即如果一个键的值是复合类型的值（数组、对象、函数）
        let obj = {a:{b:1}};
        let {...obj1} = obj;
        obj.a.b = 2;
        console.log(obj1.a.b)
        //引用赋值不会继承原对象的继承属性，但是对单纯的字符串那些赋值，是可以获取原对象的继承属性的
        let obj2 = Object.create({ m:1,n:2 });
        obj2.j = 3
        let{m,...copyO} = obj2
        console.log(m,copyO.n,copyO.j)
    }
    {
        //扩展运算符可以用于合并两个对象。
        let a = {x:1}
        let b = {y:1}
        let c = {...a,...b,z:1}//等价于Object.assign({},a,b)
        console.log(c)
    }

}







