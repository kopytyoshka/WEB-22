var before_loadtime = new Date().getTime();
window.onload = Pageloadtime;
function Pageloadtime() {
    var aftr_loadtime = new Date().getTime();
    // Time calculating in seconds
    pgloadtime = (aftr_loadtime - before_loadtime) / 1000

    document.getElementById("loadtime").innerHTML = "time: <font color='#73584B'><b>" + pgloadtime + "</b></font> seconds";
}

function getRandomInt() {

    document.getElementById("random").innerHTML = "rand: " + Math.ceil(Math.random() * 10);
}