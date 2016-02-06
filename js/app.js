var imgName = ["Bag", "Banana", "Boots", "Chair", "Cthulu", "Dragon", "Pen", "Scissors", "Shark", "Sweep", "Unicorn", "USB", "Water Can", "Wine Glass"]
var imgArr = []
var voteRounds = 0

function ImageVoter(name) {
  this.path = "img/" + name + ".jpg";
  this.name = name;
  this.imgVote = 0;
  imgArr.push(this);
};

function generatePic() {
  for(var name in imgName) {
    new ImageVoter(imgName[name]);
  };
};
generatePic();

randomNumber = function() {
  return Math.floor((Math.random() * (15 - 1) + 1));
}

var img = document.createElement("img");
img.src = imgArr[6].path;

var src = document.getElementById("vote1");
src.appendChild(img);

vote1.addEventListener("click", function() {
  event.preventDefault();
  ImageVoter.addvote += 1;
  voteRounds += 1;
  console.log("Added Vote Point");
});
