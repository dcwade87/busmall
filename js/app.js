var imgName = ["Bag", "Banana", "Boots", "Chair", "Cthulhu", "Dragon", "Pen", "Scissors", "Shark", "Sweep", "Unicorn", "USB", "Water_Can", "Wine_Glass"]
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
  return Math.floor(Math.random() * imgName.length);
}

var img = document.createElement("img");
img.src = imgArr[randomNumber()].path;

var src = document.getElementById("vote1");
src.appendChild(img);

vote1.addEventListener("click", function() {
  event.preventDefault();
  ImageVoter.addvote += 1;
  voteRounds += 1;
  console.log("Added Vote Point");
});
