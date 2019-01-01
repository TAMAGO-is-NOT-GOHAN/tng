// ユーザーネームの取得
var param = location.search

var username = getParam('username')

function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var playMovePoint = 0.0;

function loopFunc() {
  // ループする処理
  main();
}
function lastFunc() {
  // ループの終わりに実行する処理
  // alert(Math.ceil(playMovePoint / 100));
  location.href = "./point.html?username=" + username + "&score=" + Math.ceil(playMovePoint / 100);
  navigator.vibrate([1000]);
}
var loopTimes = 20; // ループする回数
var loopInterval = 1000; // ループする間隔(ミリ秒)

var count = 0;
var countup = function(){
  console.log(count++);
}

var loop = setInterval(function(){
  loopFunc();
  countup();
  if(count >= loopTimes){
    lastFunc();
    clearInterval(loop);
  }
}, loopInterval);

function sleep(waitMsec) {
  var startMsec = new Date();

  while (new Date() - startMsec < waitMsec);
}

function main() {
  var aX1, aX2;
  var aY1, aY2;
  var aZ1, aZ2;
  //最初の加速度を取得
  window.addEventListener("devicemotion", (dat) => {
    playMovePoint += abs(dat.accelerationIncludingGravity.x);
    playMovePoint += abs(dat.accelerationIncludingGravity.y);
    playMovePoint += abs(dat.accelerationIncludingGravity.z);
  });

  //最初の加速度を取得
  sleep(50);

  window.addEventListener("devicemotion", (dat) => {
  //0.1秒後の加速度を取得
    playMovePoint += abs(dat.accelerationIncludingGravity.x);
    playMovePoint += abs(dat.accelerationIncludingGravity.y);
    playMovePoint += abs(dat.accelerationIncludingGravity.z);
  });
}

function abs(value) {
  return value > 0 ? value : value * -1;
}
