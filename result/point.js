var param = location.search

var username = getParam('username')
document.getElementById("username").innerHTML = username;
var score = getParam('score')
document.getElementById("score").innerHTML = score;

function getParam(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function tweet() {
  window.open("https://twitter.com/intent/tweet?text=私は%20%23DynamicDance%20で" + score + "点を獲得しました！", "_blank");
}