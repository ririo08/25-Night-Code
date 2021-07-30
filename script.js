function clock() {
    var nowTime = new Date();
    var msg = nowTime.getHours() + ":" + nowTime.getMinutes() + ":" + nowTime.getSeconds();
    document.getElementById("clock").innerHTML = msg;
}
setInterval('clock()', 1000);