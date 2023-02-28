var numberOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfButtons; i++){
	
	document.querySelectorAll(".drum")[i].addEventListener("click", function () {
  var buttonInnerHTML = this.innerHTML;
		makeSound(buttonInnerHTML);

		buttonAnimation(buttonInnerHTML);
  });

}

addEventListener("keydown", function(event){
	makeSound(event.key);

	buttonAnimation(event.key);
});	


function makeSound(key){
	switch (key) {
    case "w":
      var tom1 = new Audio("sounds/crash.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/kick-bass.mp3");
      tom2.play();
      break;

    case "s":
      var tom2 = new Audio("sounds/snare.mp3");
      tom2.play();
      break;

    case "d":
      var tom2 = new Audio("sounds/tom-1.mp3");
      tom2.play();
      break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      var tom2 = new Audio("sounds/tom-3.mp3");
      tom2.play();
      break;

    case "l":
      var tom2 = new Audio("sounds/tom-4.mp3");
      tom2.play();
      break;

    default:
      console.log(this);
  }
}

function buttonAnimation(currentKey){

	 var activateButton = document.querySelector("."+currentKey);
		activateButton.classList.add("pressed");

		 setTimeout(function(){
				activateButton.classList.remove("pressed");
			}, 200);
}