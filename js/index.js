'use static'
function time() {
    var Day = new Date();
    var h = Day.getHours();
    //console.log(h);
    var m = Day.getMinutes();
    var s = Day.getSeconds();
    var mi=Day.getMilliseconds();
    //console.log(s);
    document.getElementById("time1").innerHTML = "<h1>现在时间:" + h + "点:" + m + "分:" + s + "秒:"+mi+"</h1>";
    //console.log(time());
    var mytime = setTimeout("time()", 1000);
}
