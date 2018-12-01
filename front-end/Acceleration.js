var playMovePoint = 0.0;

function loopFunc() {
  // ループする処理
  main();
}
function lastFunc() {
  // ループの終わりに実行する処理
  alert(Math.floor(playMovePoint));
}
var loopTimes = 10; // ループする回数
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
    playMovePoint -= abs(dat.accelerationIncludingGravity.x);
    playMovePoint -= abs(dat.accelerationIncludingGravity.y);
    playMovePoint -= abs(dat.accelerationIncludingGravity.z);
  });

  //最初の加速度を取得
  sleep(100);

  //0.1秒後の加速度を取得
  window.addEventListener("devicemotion", (dat) => {
    playMovePoint += abs(dat.accelerationIncludingGravity.x);
    playMovePoint += abs(dat.accelerationIncludingGravity.y);
    playMovePoint += abs(dat.accelerationIncludingGravity.z);
  });
}

function abs(value) {
  return value > 0 ? value : value * -1;
}
