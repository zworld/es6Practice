/**
 * Created by zhongxinzhi on 2017/3/20.
 */
var a = 1;
var b = 2;
var c =3;
var d = 4;
setTimeout(()=>d='change',500)
var f = function () {
    return 'export func'
}
export {a, b, c as C,d,f}