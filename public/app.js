var createCatDetail = function() {
  var catDetail = document.createElement('ul');
  catDetail.classList.add('cat');
  return catDetail;
};

var createCatName = function(name) {
  var catName = document.createElement('li');
  catName.innerText = name;
  return catName;
};

var createCatFood = function(favourite_food) {
  var catFood = document.createElement('li');
  catFood.innerText = favourite_food;
  return catFood;
};

var appendElements = function(cats, catDetail, catName, catFood, catImage) {
  catFood.appendChild(catImage);
  catName.appendChild(catFood);
  catDetail.appendChild(catName);
  cats.appendChild(catDetail);
};

var createCatImage = function(image) {
  var catImage = document.createElement('img');
  catImage.width = "500";
  catImage.height = "380";
  catImage.src = image;
  return catImage;
}

var addCat = function(name, favourite_food, image) {
  var catDetail = createCatDetail();
  var catName = createCatName(name);
  var catFood = createCatFood(favourite_food);
  var catImage = createCatImage(image);
  var cats = document.getElementById('cats');
  appendElements(cats, catDetail, catName, catFood, catImage);
}

var catArray = [{name: "Cat Damon", food: "chicken", image: "https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg"}, {name: "Fleas Witherspoon", food: "yoghurt", image: "https://i.ytimg.com/vi/prALrHUJ8Ns/hqdefault.jpg"}, {name: "Boba", food: "sock fluff", image: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"}, {name: "Max", food: "Whiskas Temptations", image: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"}];

var app = function() {
  for(cat of catArray) {
    addCat("Name: " + cat.name, "Favourite food: " + cat.food + "\n", cat.image);
  }
 
}

window.onload = app;
