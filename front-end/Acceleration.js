var aX = new Array(2);
aX[0] = 0;
aX[1] = 0;
var aY = new Array(2);
aY[0] = 0;
aY[1] = 0;
var aZ = new Array(2);
aZ[0] = 0;
aZ[1] = 0;

var playMovePoint = 0;

var timer = window.setInterval(() => {
  main();
}, 10000);

alert(playMovePoint);

function main() {
  window.addEventListener("devicemotion", (dat) => {
    aX[0] = dat.accelerationIncludingGravity.x;
    aY[0] = dat.accelerationIncludingGravity.y;
    aZ[0] = dat.accelerationIncludingGravity.z;
  });

  var timer = window.setInterval(() => {}, 100);

  window.addEventListener("devicemotion", (dat) => {
    aX[1] = dat.accelerationIncludingGravity.x;
    aY[1] = dat.accelerationIncludingGravity.y;
    aZ[1] = dat.accelerationIncludingGravity.z;
  });

  playMovePoint += abs(aX[1] - aX[0]);
  playMovePoint += abs(aY[1] - aY[0]);
  playMovePoint += abs(aZ[1] - aZ[0]);
}

function abs(var value) {
  return value > 0 ? value : -value;
};
