var aX1;
var aX2;
var aY1;
var aY2;
var aZ1;
var aZ2;

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
    aX1 = dat.accelerationIncludingGravity.x;
    aY1 = dat.accelerationIncludingGravity.y;
    aZ1 = dat.accelerationIncludingGravity.z;
    document.write(dat.accelerationIncludingGravity.x);
    document.write(dat.accelerationIncludingGravity.y);
    document.write(dat.accelerationIncludingGravity.z);
  });

  //最初の加速度を取得
  sleep(100);

  //0.1秒後の加速度を取得
  window.addEventListener("devicemotion", (dat) => {
    aX2 = dat.accelerationIncludingGravity.x;
    aY2 = dat.accelerationIncludingGravity.y;
    aZ2 = dat.accelerationIncludingGravity.z;
    document.write(dat.accelerationIncludingGravity.x);
    document.write(dat.accelerationIncludingGravity.y);
    document.write(dat.accelerationIncludingGravity.z);
  });

  //playMovePointに最初と0.1秒後の加速度の絶対値を代入
  playMovePoint += /*abs*/(aX2 - aX1);
  playMovePoint += /*abs*/(aY2 - aY1);
  playMovePoint += /*abs*/(aZ2 - aZ1);

  //document.write(aX[1] + ", " + aX[0]);
  //document.write(aY[1] + ", " + aY[0]);
  //document.write(aZ[1] + ", " + aZ[0]);
}

// function abs(var value) {
//   return value > 0 ? value : value * -1;
// };
