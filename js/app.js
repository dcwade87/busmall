var imgName = ["Bag", "Banana", "Boots", "Chair", "Cthulu", "Dragon", "Pen", "Scissors", "Shark", "Sweep", "Unicorn", "USB", "Water Can", "Wine Glass"]
var imgArr = []
var voteRounds = 0

function ImageVoter(name) {
  this.path = "img/" + name + ".jpg";
  this.name = name
  this.imgvote = 0;
  imgArr.push(this);
};

function generatePic() {
  for(var name in imgName) {
    new ImageVoter(imgName[name]);
  };
};

generatePic();

var img = document.createElement("img");
img.src = "img/cthulhu.jpg";

var src = document.getElementById("vote1");
src.appendChild(img);

var img = document.createElement("img");
img.src = "img/shark.jpg";

var src = document.getElementById("vote2");
src.appendChild(img);

var img = document.createElement("img");
img.src = "img/dragon.jpg";

var src = document.getElementById("vote3");
src.appendChild(img);

vote1.addEventListener("click", function() {
  event.preventDefault();
  ImageVoter.addvote += 1;
  voteRounds += 1;
  console.log("Added Vote Point");
});

vote2.addEventListener("click", function() {
  event.preventDefault();
  ImageVoter.addvote += 1;
  voteRounds += 1;
  console.log("Added Vote Point");
});

vote3.addEventListener("click", function() {
  event.preventDefault();
  ImageVoter.addvote += 1;
  voteRounds += 1;
  console.log("Added Vote Point");
});
