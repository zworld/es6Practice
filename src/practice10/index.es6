/*
    iterator和for...of
    在ES6中，有三类数据结构原生具备Iterator接口：数组、某些类似数组的对象、Set和Map结构。
 */

{
    {
        //每一次调用next方法，都会返回数据结构的当前成员的信息。具体来说，就是返回一个包含value和done两个属性的对象。其中，value属性是当前成员的值，done属性是一个布尔值，表示遍历是否结束。
        //创建一个iterator方法
        function makeIterator(array) {
            let nextIndex = 0;
            let next  = ()=> nextIndex<array.length ? { value:array[nextIndex++],done:false } : { value:undefined,done:true}
            return {next: next};
        }
        var arrNext = makeIterator([1,2,3])
        console.log(arrNext.next(),arrNext.next(),arrNext.next(),arrNext.next())
    }

    {
        //Symbol.iterator 转成便利器对象
        let arr = [1,2,3];
        let arrIterator = arr[Symbol.iterator]();
        console.log(arrIterator.next(),arrIterator.next(),arrIterator.next(),arrIterator.next())
        //字符串也有这方法
        let str = 'jiayou';
        let strIterator = str[Symbol.iterator]();
        console.log(strIterator.next(),strIterator.next(),strIterator.next(),strIterator.next(),strIterator.next(),strIterator.next(),strIterator.next())
    }

}
