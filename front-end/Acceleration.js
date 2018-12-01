var aX = new Array(2);
aX[0] = 0;
aX[1] = 0;
var aY = new Array(2);
aY[0] = 0;
aY[1] = 0;
var aZ = new Array(2);
aZ[0] = 0;
aZ[1] = 0;
window.addEventListener("devicemotion", (dat) => {
  aX[0] = dat.accelerationIncludingGravity.x;
  aY[0] = dat.accelerationIncludingGravity.y;
  aZ[0] = dat.accelerationIncludingGravity.z;
});

var timer = window.setInterval(() => {
  phoneVib();
}, 1000);

window.addEventListener("devicemotion", (dat) => {
  aX[1] = dat.accelerationIncludingGravity.x;
  aY[1] = dat.accelerationIncludingGravity.y;
  aZ[1] = dat.accelerationIncludingGravity.z;
});

function dispAlert() {
//  if (aX[1] > aX[0] + 5 && aY[1] > aY[0] + 5 && aZ[1] > aZ[0] + 5) {
    alert('めっちゃ動いてそう(小並)');
//  }
}
