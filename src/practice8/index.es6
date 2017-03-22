import "babel-polyfill"
import { a,b,C as c,d,f } from './module1.js'
import * as module1 from  './module1.js';
import module2 from './module2' // 用export default导出 可以直接修改名称

/*
    module
     //ES6模块是编译时静态加载的，由于不是对象，所以不能引用ES6模块本身
    //import,export命令可以出现在模块的任何位置，只要处于模块顶层就可以。
    //import语句会执行所加载的模块,例如 import 'test.js',则执行test.js
   //正是因为export default命令其实只是输出一个叫做default的变量，所以它后面不能跟变量声明语句。export default var a = 1;//报错
   //因为export default本质是将该命令后面的值，赋给default变量以后再默认，所以直接将一个值写在export default之后。

 */
/*
<script defer> <script async>
 defer与async的区别是：前者要等到整个页面正常渲染结束，才会执行；后者一旦下载完，渲染引擎就会中断渲染，执行这个脚本以后，再继续渲染。一句话，defer是“渲染完再执行”，async是“下载完就执行”。
 另外，如果有多个defer脚本，会按照它们在页面出现的顺序加载，而多个async脚本是不能保证加载顺序的。
 */

/*
 CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
 CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
 */


//模块之中，顶层的this关键字返回undefined，而不是指向window。也就是说，在模块顶层使用this关键字，是无意义的。
console.log(this)
{
    {
        console.log(a,b,c)//测试用{}引入
        console.log(f())
    }
    {
        //模块变量指向的地址是只读的，不能重新赋值
        // try{
        //     a = 8
        // }catch(e){
        //     console.log(e)
        // }
        // 报错"a" is read-only

    }
    {
        console.log(module1)//测试用*引入
    }
    {
        //export语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值
        //在module1中设置了d在500毫秒后变成change
        console.log(d);
        setTimeout(()=>console.log(d),500)
    }
    {
        console.log(module2());
    }
}

