/*
    Date
 */
{
    //Date的valueOf 等价于 getTime,new Date()可以传递毫秒，日期等
    let date = new Date();
    console.log(date,date.valueOf(),date.getTime(),new Date(205,0,1,17,22,10),new Date(Date.now()),date.toTimeString())
    //Date.now获取当前毫秒
    console.log(Date.now())
    {
        //各种方法
        //getTime,getFullYear,getMonth,getDate(),getHours,getMinutes(),getSeconds(),getMilliseconds()
        let date = new Date();
        let current = {
            time: date.getTime(),
            fullYear: date.getFullYear(),
            year: date.getYear(),//以1900为基准，返回差值
            month: date.getMonth(),//获得月份减一
            day: date.getDate(),
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds(),
            milliseconds: date.getMilliseconds(),
            day: date.getDay()
        }
        console.log(current)

        //setFullYear,setMonth,setDate(),setHours,setMinutes(),setSeconds(),setMillseconds(),注意setDate(0)是将日期设置为上个月的最后一天
        console.log(date.setDate(0),date)
        //设置2019/6/6 6:59:23
        let changeDate = new Date();
        changeDate.setFullYear(2019);
        changeDate.setMonth(5);
        changeDate.setDate(6);
        changeDate.setHours(6);
        changeDate.setMinutes(59);
        changeDate.setSeconds(23);
        console.log(changeDate)
    }
}