// ユーザーネームの取得
var param = location.search

var username = getParam('username')
var score = getParam('score')

function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function lastFunc() {
  // ループの終わりに実行する処理
  // alert(Math.ceil(playMovePoint / 100));
  location.href = "../result/index.html?username=" + username + "&score=" + score;
}

var loopTimes = 5; // ループする回数
var loopInterval = 1000; // ループする間隔(ミリ秒)

var count = 0;
var countup = function(){
  console.log(count++);
}

var loop = setInterval(function(){
  countup();
  if(count >= loopTimes){
    lastFunc();
    clearInterval(loop);
  }
}, loopInterval);
