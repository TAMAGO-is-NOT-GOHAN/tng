function getCSVFile() {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
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
  for(var i = 0; (i < tempArray.length) && (i < 10); i++){
    csvArray[i] = tempArray[i].split(",");
  }
  console.log(csvArray);
  for (var i = 0; i < 10; i++) {
    document.getElementById("rank" + (i + 1) + "name").innerHTML = csvArray[i][0];
    document.getElementById("rank" + (i + 1) + "score").innerHTML = csvArray[i][1];
  }
}
