var aX[2] = {0, 0}, aY[2] = {0, 0}, aZ[2] = {0, 0};

window.addEventListener("devicemotion", (dat) => {
  aX[0] = dat.accelerationIncludingGravity.x;
  aY[0] = dat.accelerationIncludingGravity.y;
  aZ[0] = dat.accelerationIncludingGravity.z;
});

var timer = window.setInterval(() => {}, 1000);

window.addEventListener("devicemotion", (dat) => {
  aX[1] = dat.accelerationIncludingGravity.x;
  aY[1] = dat.accelerationIncludingGravity.y;
  aZ[1] = dat.accelerationIncludingGravity.z;
});

function phoneVib() {
   if (aX[1] > aX[0] + 5 && aY[1] > aY[0] + 5 && aZ[1] > aZ[0] + 5) {
     alert('めっちゃ動いてそう(小並)');
   }
}
