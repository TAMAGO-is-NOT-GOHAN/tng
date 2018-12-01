var playMoveScore = 0;

window.addEventListener("devicemotion", getPos);
  
/*
function loopFunc() {
  // ループする処理
  playMovePoint = getPoint(playMovePoint);
}
*/

/*
function lastFunc() {
  // ループの終わりに実行する処理
  alert('マジ' + playMovePoint + playMovePoint);
  alert('ぎん' + playMovePoint);
}
*/

var loopTimes = 10; // ループする回数
var loopInterval = 1000; // ループする間隔(ミリ秒)

var count = 0;
var countup = function(){
  console.log(count++);
}

var loop = setInterval(function(){
  //loopFunc();
  playMoveScore = getScore(playMoveScore);
  countup();
  if(count >= loopTimes){
    alert('マジ' + playMovePoint + playMovePoint);
    alert('ぎん' + playMovePoint);
    clearInterval(loop);
  }
}, loopInterval);

function sleep(waitMsec) {
  var startMsec = new Date();

  while (new Date() - startMsec < waitMsec);
}

function getScore(score) {
  var pos1 = new Object();
  var pos2 = new Object();

  //最初の加速度を取得
  window.addEventListener("devicemotion", (dat) => {
    pos1.x = dat.accelerationIncludingGravity.x;
    pos1.y = dat.accelerationIncludingGravity.y;
    pos1.z = dat.accelerationIncludingGravity.z;
  });

  document.write(pos1.x + pos1.y + pos1.z);

  //最初の加速度を取得
  sleep(100);

  //0.1秒後の加速度を取得
  window.addEventListener("devicemotion", (dat) => {
    pos2.x = dat.accelerationIncludingGravity.x;
    pos2.y = dat.accelerationIncludingGravity.y;
    pos2.z = dat.accelerationIncludingGravity.z;
  });

  document.write(pos2.x + pos2.y + pos2.z);

  //playMovePointに最初と0.1秒後の加速度の絶対値を代入
  var n = 2 ;	// 小数点第n位まで残す
  score += Math.round(pos2.x - pos1.x);
  score += Math.round(pos2.y - pos1.y);
  score += Math.round(pos2.z - pos1.z);
  //newPoint += aX2 - aX1;
  //newPoint += aY2 - aY1;
  //newPoint += aZ2 - aZ1;

  document.write(score);

  return score;
}

// function abs(var value) {
//   return value > 0 ? value : value * -1;
// };
