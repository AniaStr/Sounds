


let numberOfDrumButtons = document.querySelectorAll('.sound').length;

for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".sound")[i].addEventListener("click", handleClick);

  function handleClick() {
    let buttonInnerHtml = this.innerHTML;

    switch (buttonInnerHtml) {
      case "dog":
        let dog = new Audio('sounds/dog.mp3');
        dog.play();
        break;

      case "cat":
        let cat = new Audio('sounds/cat.mp3');
        cat.play();
        break;

      case "cow":
        let cow = new Audio('sounds/cow.mp3');
        cow.play();
        break;

      case "rain":
        let rain = new Audio('sounds/rain.mp3');
        rain.play();
        break;

      case "ambulance":
        let ambulance = new Audio('sounds/ambulance.mp3');
        ambulance.play();
        break;

      case "car":
        let car = new Audio('sounds/car.mp3');
        car.play();
        break;

    }

  };
}



