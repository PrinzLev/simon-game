userClickedPattern = [];
gamePattern = [];
buttonColors = ["red", "blue", "green", "yellow"];
var level = 0;
// Sequence animation and sound
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  var randomColor = gamePattern[gamePattern.length - 1];
  switch (randomColor) {
    case "red":
      var redSound = new Audio("sounds/red.mp3");
      redSound.play();
      $(".red").fadeOut(200).fadeIn(100);
      break;
    case "blue":
      var blueSound = new Audio("sounds/blue.mp3");
      blueSound.play();
      $(".blue").fadeOut(200).fadeIn(100);
      break;
    case "green":
      var greenSound = new Audio("sounds/green.mp3");
      greenSound.play();
      $(".green").fadeOut(200).fadeIn(100);
      break;
    case "yellow":
      var yellowSound = new Audio("sounds/yellow.mp3");
      yellowSound.play();
      $(".yellow").fadeOut(200).fadeIn(100);
      break;
    default:
  }
  level++;
  while (userClickedPattern.length > 0){
    userClickedPattern.pop();
  }
  return $('h1').text("Level " + level);
}
// Click Audio
function playSound(name){
    switch (name) {
      case "red":
        var redSound = new Audio("sounds/red.mp3");
        redSound.play();
        break;
      case "blue":
        var blueSound = new Audio("sounds/blue.mp3");
        blueSound.play();
        break;
      case "green":
        var greenSound = new Audio("sounds/green.mp3");
        greenSound.play();
        break;
      case "yellow":
        var yellowSound = new Audio("sounds/yellow.mp3");
        yellowSound.play();
        break;
      default:

    }
}
// Click Animation
function animatePress(currentColor){
  $("#" + currentColor).addClass("pressed");
  setTimeout(function (){
    $("#" + currentColor).removeClass("pressed")
  }, 50);
}
function checkAnswer(currentLevel){
  if (userClickedPattern.length > currentLevel){
  if (userClickedPattern.toString() === gamePattern.toString()) {
    setTimeout (function(){
      nextSequence();
    }, 500)
  }
}
for (i = 0; i<userClickedPattern.length; i++){
  if (userClickedPattern[i] !== gamePattern[i]){
      $("h1").text("Game Over, Press Any Key to Continue");
      $("body").addClass("game-over")
      setTimeout (function(){
      $("body").removeClass("game-over")
    }, 200)
      var over = new Audio("sounds/wrong.mp3")
      over.play()
      startOver();
    }
  }
}
function startOver(){
  level = 0;
  gamePattern = [];
}

// Click Event Listener
$(".btn").click(function() {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  animatePress($(this).attr("id"));
  playSound($(this).attr("id"));
  checkAnswer(userClickedPattern.length - 1)
  })
// Keydown Press to Start
$("body").keydown(function(){
  if (level === 0){
  $("h1").text("Level " + level)
  nextSequence()
}
})
// game over
