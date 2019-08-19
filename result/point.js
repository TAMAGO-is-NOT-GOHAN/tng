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

function getCSVFile() {
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    createArray(xhr.responseText);
  };

  xhr.open("get", "data.csv", true);
  xhr.send(null);
}
getCSVFile();

function createXMLHttpRequest() {
  var XMLhttpObject = null;
  XMLhttpObject = new XMLHttpRequest();
  return XMLhttpObject;
}

function createArray(csvData) {
  var tempArray = csvData.split("\n");
  var csvArray = new Array();
  for (var i = 0; i < tempArray.length; i++) {
    csvArray[i] = tempArray[i].split(",");
  }
  console.log(csvArray);
}

// ファイル操作
window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;

function onError() { console.log('Error : ', arguments); }

navigator.webkitPersistentStorage.requestQuota(1024 * 1024 * 1024, function (grantedBytes) {
  console.log('requestQuota: ', arguments);
  requestFS(grantedBytes);
}, onError);

function requestFS(grantedBytes) {
  window.webkitRequestFileSystem(window.PERSISTENT, grantedBytes, function (fs) {
    console.log('fs: ', arguments); // I see this on Chrome 27 in Ubuntu
  }, onError);
}

fs.root.getFile('log.txt', { create: true }, function (fileEntry) {

  // Create a FileWriter object for our FileEntry (log.txt).
  fileEntry.createWriter(function (fileWriter) {

    fileWriter.onwriteend = function (e) {
      console.log('Write completed.');
    };

    fileWriter.onerror = function (e) {
      console.log('Write failed: ' + e.toString());
    };

    // Create a new Blob and write it to log.txt.
    var bb = new Blob(['Lorem Ipsum']);
    fileWriter.write(bb);
  }, onError);
}, onError);

// https://twitter.com/intent/tweet?text=テキストテキスト
function tweet() {
  window.open("https://twitter.com/intent/tweet?text=私は%20%23DynamicDance%20で" + score + "点を獲得しました！", "_blank");
}