// Messages
var msg1 = "Sorry, This behavior is disabled to prevent leakage of confidential functions";
var msg2 = "Sorry, This Button Is Disabled To Avoid Errors";
var msg3 = "Sorry, This behavior is disabled ";

// Sounds
var talk1 = new SpeechSynthesisUtterance(msg1);
var talk2 = new SpeechSynthesisUtterance(msg2);
var talk3 = new SpeechSynthesisUtterance(msg3);

document.addEventListener('contextmenu', function (e) {
    window.speechSynthesis.speak(talk1)
    // e.preventDefault();
});

document.onkeydown = function (e) {
    if (event.keyCode == 123) {
        window.speechSynthesis.speak(talk1);
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        window.speechSynthesis.speak(talk1);
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        window.speechSynthesis.speak(talk1);
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        window.speechSynthesis.speak(talk1);
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        window.speechSynthesis.speak(talk1);
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) {
        window.speechSynthesis.speak(talk1);
        return false;
    } if (e.ctrlKey && e.keyCode == 'A'.charCodeAt(0)) {
        window.speechSynthesis.speak(talk1);
        return false;
    }
    if (e.key == "Escape") {
        window.speechSynthesis.speak(talk2);
        return false;
    }
}