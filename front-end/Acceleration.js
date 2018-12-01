var playMoveScore = 0;

window.addEventListener("devicemotion", getPos);
  
function loopFunc() {
  // ループする処理
  playMovePoint = getPoint(playMovePoint);
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
  //loopFunc();
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

function getScore(score) {
  var aX1, aX2;
  var aY1, aY2;
  var aZ1, aZ2;

  //最初の加速度を取得
  window.addEventListener("devicemotion", (dat) => {
    aX1 = dat.accelerationIncludingGravity.x;
    aY1 = dat.accelerationIncludingGravity.y;
    aZ1 = dat.accelerationIncludingGravity.z;
  });

  document.write(aX1 + aY1 + aZ1);

  //最初の加速度を取得
  sleep(100);

  //0.1秒後の加速度を取得
  window.addEventListener("devicemotion", (dat) => {
    aX2 = dat.accelerationIncludingGravity.x;
    aY2 = dat.accelerationIncludingGravity.y;
    aZ2 = dat.accelerationIncludingGravity.z;
  });

  document.write(aX2 + aY2 + aZ2);

  //playMovePointに最初と0.1秒後の加速度の絶対値を代入
  var n = 2 ;	// 小数点第n位まで残す
  score += Math.round(aX2 - aX1);
  score += Math.round(aY2 - aY1);
  score += Math.round(aZ2 - aZ1);
  //newPoint += aX2 - aX1;
  //newPoint += aY2 - aY1;
  //newPoint += aZ2 - aZ1;

  document.write(score);

  return score;
}

// function abs(var value) {
//   return value > 0 ? value : value * -1;
// };
