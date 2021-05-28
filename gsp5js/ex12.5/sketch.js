var films = [];
var filmData;

var kadu = [
  {
    "title": "Breathless",
    "director": "Jean-Luc Godard",
    "year": 1960,
    "rating": 8.0
  },
  {
    "title": "Le Petit Soldat",
    "director": "Jean-Luc Godard",
    "year": 1960,
    "rating": 7.2
  },
  {
    "title": "A Woman Is a Woman",
    "director": "Jean-Luc Godard",
    "year": 1961,
    "rating": 7.7
  },
  {
    "title": "My Life to Live",
    "director": "Jean-Luc Godard",
    "year": 1962,
    "rating": 8.1
  },
  {
    "title": "Les Carabiniers",
    "director": "Jean-Luc Godard",
    "year": 1963,
    "rating": 7.0
  },
  {
    "title": "Contempt",
    "director": "Jean-Luc Godard",
    "year": 1963,
    "rating": 7.8
  },
  {
    "title": "Band of Outsiders",
    "director": "Jean-Luc Godard",
    "year": 1964,
    "rating": 7.9
  },
  {
    "title": "A Married Woman",
    "director": "Jean-Luc Godard",
    "year": 1964,
    "rating": 7.4
  },
  {
    "title": "Alphaville",
    "director": "Jean-Luc Godard",
    "year": 1964,
    "rating": 7.2
  },
  {
    "title": "Pierrot le Fou",
    "director": "Jean-Luc Godard",
    "year": 1965,
    "rating": 7.7
  },
  {
    "title": "Masculin Féminin",
    "director": "Jean-Luc Godard",
    "year": 1966,
    "rating": 7.7
  },
  {
    "title": "Made in U.S.A.",
    "director": "Jean-Luc Godard",
    "year": 1966,
    "rating": 6.5
  }
]

function preload() {
  filmData = kadu;
  // console.log(1);
  // filmData = loadJSON("films.json");
  // console.log(kadu.length);
  // console.log(2);

}

function setup() {
  createCanvas(480, 120);

  console.log(filmData.length);
  for (let i = 0; i < filmData.length; i++) {
    const o = filmData[i];
    films[i] = new Film(o);
  }
  noStroke();
}

function draw() {
  background(0);

  for (let i = 0; i < films.length; i++) {
    var x = i*32 +32;
    films[i].display(x, 105);
  }
}

function Film(f) {
  this.title = f.title;
  this.director = f.director;
  this.year = f.year;
  this.rating = f.rating;

  this.display = function (x, y) {
    var ratingGray = map(this.rating, 6.5, 8.1, 102, 255);
    push();
    translate(x, y);
    rotate(-QUARTER_PI);
    fill(ratingGray);
    text(this.title, 0,0);
    pop();
  };
}
