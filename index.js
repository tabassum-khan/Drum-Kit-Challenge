var buttons = document.querySelectorAll('.drum');

for (var i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener('click', function (e) {
        var ch = this.textContent;
        switchAudio(ch);
        buttonAnimation(ch);
    });
}


document.addEventListener('keypress', function (e) {
    switchAudio(e.key.toLowerCase());
    buttonAnimation(e.key.toLowerCase());
});

function switchAudio(ch) {
    switch (ch) {
        case 'w':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;

        case 'a':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;

        case 's':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;

        case 'd':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;

        case 'j':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;

        case 'k':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;

        case 'l':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;


        default:
            console.log("No Audio played");
            break;
    }
}

function buttonAnimation(ch) {

    if (!$('.set button').hasClass(ch))
        console.log("Element doesn't exist..");
    else {
        button = document.querySelector('.' + ch);
        button.classList.add('flash');

        setTimeout(function () {
            button.classList.remove("flash");
        },100);
    }

}