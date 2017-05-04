import "babel-polyfill"
import axios from "axios"
/*
天气key: 8bc5d00318714651830c69f1c855e829
 例子:https://free-api.heweather.com/v5/weather?city=yourcity&key=yourkey
 */
/*
    promise
 */
let reqWeather = ({city='chengdu',key='8bc5d00318714651830c69f1c855e829'} = {})=>{
    return axios({
        baseURL: 'https://free-api.heweather.com/v5/',
        url: '/weather',
        params: {
            key: key,
            city: city
        },
        transformResponse: [
            function (res) {
                return JSON.parse(res).HeWeather5[0];
            }]
    })
}
// let promiseWeather = function(city='chengdu',key='8bc5d00318714651830c69f1c855e829'){
//     return new Promise((resolve,reject)=>{
//         reqWeather({city,key}).then(function(res){
//             let data = res.data;
//             if(data.status == 'ok') return resolve(data)
//             return reject(data)
//         })
//     })
// }
// // promiseWeather('ylflsdjf').then((data)=>console.log(`pass: ${data.status}`),(data)=>console.log(`reject:${data.status}`))
// // {
// //     {
// //         //基本用法
// //         let promise = new Promise((resolve,reject)=>{
// //             setTimeout(resolve,1000,0)
// //         })
// //         promise.then((v)=>{
// //             console.log(v)
// //             return  v+1
// //         })
// //         //如果then中要异步回调，必须返回promise对象才能控制
// //         //直接传入异步函数，无法回调，将直接执行
// //         promise.then((v)=>{
// //             setTimeout((v)=>{
// //                 console.log(promise)
// //                 return v+1
// //             },1000,v)
// //         }).then((v)=>{
// //             setTimeout((v)=>{
// //                 console.log(promise)
// //                 return v+1
// //             },1000,v)
// //         })
// //         //
// //         promise.then(function(v){
// //               return  new Promise((resolve,reject)=>{
// //                     setTimeout((v)=>{
// //                         console.log(v)
// //                         return resolve(v+1)
// //                     },3000,v)
// //                 })
// //         }).then(
// //             (v)=>new Promise((resolve,reject)=>{
// //                 setTimeout((v)=>{
// //                     console.log(v)
// //                     return resolve(v+1)
// //                 },3000,v)
// //             })
// //         )
// //
// //     }
// //
// //     {
// //         //Promise.all 所有成功则返回fulfilled,并将全部对象返回，如果有失败，返回第一个失败的对象
// //         let promisesSuccess = ['chongqing' ,'shenzhen','beijing'].map((item)=>promiseWeather(item))
// //         let promisesfaild = [null ,'test','beijing'].map((item)=>promiseWeather(item))
// //
// //         Promise.all(promisesfaild).then((items)=>console.log(items),(items)=>console.log(items))
// //         Promise.all(promisesSuccess).then(([...items])=>console.log(items.map((info)=>info.basic.city)),(items)=>console.log(items))
// //
// //     }
// //     {
// //         //Promise.race(),返回率变化的状态
// //         let promises = ['chongqing','beijing','neijiang','hangzhou','kunming'].map((item)=>promiseWeather(item))
// //         Promise.race(promises).then((item)=>console.log(`Promise.race: ${item.basic.city}`),(item)=>console.log(`Promise.race: failed`))
// //     }
// //     {
// //         //Promise.resolve,Promise.reject
// //         Promise.resolve('promise resolve').then(tip=>console.log(tip))
// //     }
// //
// // }
// reqWeather()
// reqWeather()
// reqWeather()
// reqWeather()
// reqWeather()
// reqWeather()
// reqWeather()
reqWeather()



/*
xml
 */
var xhr = new XMLHttpRequest();
var formData = new FormData();
formData.append("key", "8bc5d00318714651830c69f1c855e829");
xhr.open("get",'https://free-api.heweather.com/v5/weather?key=8bc5d00318714651830c69f1c855e829&city=beijing',true);
xhr.setRequestHeader("Accept", "application/json, text/plain, */*");
xhr.setRequestHeader("Accept-Language", "zh-CN,zh");
xhr.onreadystatechange = ()=>{
    if(xhr.readyState == 4){
        console.log(xhr.readyState)
        console.log(xhr.status)
    }else {
        console.log(xhr.readyState)
        console.log(xhr.status)
    }
}
xhr.timeout = 10000;
xhr.ontimeout = function () {
    console.log('timeout')
}
xhr.onloadstart = ()=>{
    console.log('onloadstart')
}
xhr.onloadstart = ()=>{
    console.log('onloadstart')
}
xhr.onprogress = (e)=>{
    if(e.lengthComputable){
        console.log(e.position)
        console.log(e.totalSize)
    }
}

xhr.send(null);
