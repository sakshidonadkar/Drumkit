let totaldrumbutton = document.querySelectorAll('.drum').length;

for (let i = 0; i < totaldrumbutton; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function() {
        let buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
    })
}

document.addEventListener("keypress", function(event) {

    makeSound(event.key);

    buttonAnimation(event.key);
});

function makeSound(key) {
    
    switch (key) {
        case "W":
            let tom1 = new Audio("sound/tom-1.mp3");
            tom1.play();
            break;

        case "A":
            let tom2 = new Audio("sound/tom-2.mp3");
            tom2.play();
            break;
                
        case "S":
            let tom3 = new Audio("sound/tom-3.mp3");
            tom3.play();
            break;        

        case "D":
            let tom4 = new Audio("sound/tom-4.mp3");
            tom4.play();
            break;
                
         case "J":
            let snare = new Audio("sound/snare.mp3");
            snare.play();
             break;            

        case "K":
            let crash = new Audio("sound/crash.mp3");
            crash.play();
            break;

        case "L":
            let kick = new Audio("sound/kick-bass.mp3");
            kick.play();
            break;
    }
}

function buttonAnimation(currentKey){

    let activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed")

    setTimeout( () => {
        activeButton.classList.remove("pressed");
    }, 100);

}