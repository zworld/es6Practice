/*
生成器generator
 */
{
    {
        //generator函数就是遍历器生成函数
        var myIterable = {};
        myIterable[Symbol.iterator] = function* (){
            yield 1;
            yield 2;
            yield 3
        }
        console.log([...myIterable]);

        //generator执行后，返回一个遍历器对象。该对象本身也具有Smbol.iterator属性，执行后返回本身
        function* gen() {

        }
        var g = gen();
        console.log(g[Symbol.iterator]() === g);
    }
    {
        //next方法参数，被当做上一个yied语句的返回值,用来暂停和重新执行
        function* f(){
            for(var i=0;true;i++){
                var reset = yield i;
                if(reset){
                    i = -1
                }
            }
        }
        let gen = f();
        console.log(gen.next(),gen.next(),gen.next(),gen.next(true))

        function* inject(x) {
            var y = 2 * (yield (x + 1))
            var z = yield (y/3)
            return (x+y+z)
        }
        let a = inject(5);
        console.log(a.next(),a.next(12),a.next(13))
    }
    {
        //返回对象
        function* F(){
            this.a = 1;
            this.b =2;
        }
        let obj = {};
        let f = F.call(obj);
        f.next();
        f.next();
        f.next();
        console.log(obj)
    }
    {
        //promise结合
        function* lazy(){
            yield (function(){console.log('test');return new Promise((resolve)=>setTimeout(resolve,1000))})()
        }
        let l = lazy();
    }
    // {
    //     //lazyman
    //     function lazyman(){}
    //     lazyman.prototype.eat = function(food=''){
    //         console.log(`eat ${food}`)
    //         return this
    //     }
    //     lazyman.prototype.sleep = function(time=0){
    //         let self = this;
    //         let s = new Promise(resolve=>{
    //             setTimeout( (self) =>{
    //                 console.log(`sleep${time}s`);
    //                 resolve(self)
    //             },time*1000,self)
    //         })
    //         s.then((self)=>{
    //             console.log(self)
    //             return self;
    //         })
    //         return self;
    //     }
    //     let man = new lazyman();
    //     man.eat('banana').sleep(3).eat('test')
    // }
    // {
    //     function lazyman(){
    //         this.tasks = [];
    //     }
    //     lazyman.prototype.eat = function (food='') {
    //         var self = this;
    //         this.tasks.push(function(){
    //             console.log(`he is eating ${food}`)
    //         })
    //         return this
    //     }
    //     lazyman.prototype.sleep = function(time){
    //         var self = this;
    //         var fn  = function(){
    //             setTimeout(()=>{
    //                 console.log(`he is sleep ${time} s`)
    //                 self.next()
    //             },time*1000)
    //         }
    //         this.tasks.push(fn);
    //         return this;
    //     }
    // }



}