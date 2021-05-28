var weatherDate;

function preload() {
  weatherDate = loadJSON("cincinnati.json");
}

function setup() {
  var temp = getTemp(weatherDate);
  print(temp);
}

function getTemp(data) {
  var list = data.list;
  var item = list[0];
  var main = item.main;
  var t = main.temp;
  return t;
}