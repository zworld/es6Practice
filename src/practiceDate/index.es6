/*
    Date
 */
{
    //Date的valueOf 等价于 getTime
    let date = new Date();
    console.log(date,date.valueOf(),date.getTime())
    //Date.now获取当前毫秒
    console.log(Date.now())
}