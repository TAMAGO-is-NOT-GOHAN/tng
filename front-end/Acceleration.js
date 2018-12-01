var aX[2] = {0, 0}, aY[2] = {0, 0}, aZ[2] = {0, 0};

window.addEventListener("devicemotion", (dat) => {
  aX[0] = dat.accelerationIncludingGravity.x;
  aY[0] = dat.accelerationIncludingGravity.y;
  aZ[0] = dat.accelerationIncludingGravity.z;
});

var timer = window.setInterval(() => {
  displayData();
}, 1000);

function displayData() {
  var txt = document.getElementById("txt");
  txt.innerHTML = "x: " + aX + "<br>"
                + "y: " + aY + "<br>"
                + "z: " + aZ;
}
