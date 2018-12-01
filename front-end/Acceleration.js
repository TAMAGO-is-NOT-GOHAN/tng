var playMovePoint = 0.0;

function loopFunc() {
  // ループする処理
  main();
}
function lastFunc() {
  // ループの終わりに実行する処理
  alert('マジ' + playMovePoint + playMovePoint);
  alert('ぎん' + playMovePoint);
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
  //最初の加速度を取得
  window.addEventListener("devicemotion", (dat) => {
    var aX1 = dat.accelerationIncludingGravity.x;
    var aY1 = dat.accelerationIncludingGravity.y;
    var aZ1 = dat.accelerationIncludingGravity.z;
    document.write(dat.accelerationIncludingGravity.x + ", " + aX1);
    document.write(dat.accelerationIncludingGravity.y + ", " + aY1);
    document.write(dat.accelerationIncludingGravity.z + ", " + aZ1);
  });

  //最初の加速度を取得
  sleep(100);

  //0.1秒後の加速度を取得
  window.addEventListener("devicemotion", (dat) => {
    var aX2 = dat.accelerationIncludingGravity.x;
    var aY2 = dat.accelerationIncludingGravity.y;
    var aZ2 = dat.accelerationIncludingGravity.z;
    document.write(dat.accelerationIncludingGravity.x + ", " + aX2);
    document.write(dat.accelerationIncludingGravity.y + ", " + aY2);
    document.write(dat.accelerationIncludingGravity.z + ", " + aZ2);
  });

  //playMovePointに最初と0.1秒後の加速度の絶対値を代入
  playMovePoint += aX2 - aX1;
  playMovePoint += aY2 - aY1;
  playMovePoint += aZ2 - aZ1;

  //document.write(aX[1] + ", " + aX[0]);
  //document.write(aY[1] + ", " + aY[0]);
  //document.write(aZ[1] + ", " + aZ[0]);
}

// function abs(var value) {
//   return value > 0 ? value : value * -1;
// };
