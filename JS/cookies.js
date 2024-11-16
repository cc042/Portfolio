// variables
var userState;
var condition;
var dialogShown = "notdone";
var IsdialogOpens;

// elements
const cookie = document.querySelector(".cookie");
const cookiesform = document.querySelector(".cookiesform");
const dialogCookies = document.querySelector("dialog.cookiesPopUp");
const dialogName = document.querySelector(".cookieName");
const cookieSubmit = document.querySelector(".cookieSubmit");

// storages
localStorage.getItem("name")
localStorage.getItem("userstate")

// Functions
function prevent_leakage() {
    var msg1 = "Sorry, This behavior is disabled to prevent leakage of confidential functions";
    var msg2 = "Sorry, This Button Is Disabled To Avoid Errors";

    // Sounds
    var talk1 = new SpeechSynthesisUtterance(msg1);
    var talk2 = new SpeechSynthesisUtterance(msg2);

    document.addEventListener('contextmenu', function (e) {
        window.speechSynthesis.speak(talk1)
        e.preventDefault();
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
}

setTimeout(() => {
    if (localStorage.getItem("dialog") !== "done") {
        dialogCookies.showModal()
        document.body.style.overflow = "hidden"
    }
    else {
        dialogCookies.close()
    }
}, 1000)

if (localStorage.getItem("userstate") !== "admin") {
    prevent_leakage()
}

cookiesform.addEventListener("submit", e => {
    e.preventDefault()
    submitForm()
})

function submitForm() {
    var Name = dialogName.value.toLowerCase()
    localStorage.setItem("name", Name)

    if (Name) {
        if (localStorage.getItem("name") == "adhamati" || localStorage.getItem("name") == "code comet") {
            // User State {Admin or Normal}
            userState = `admin`
            localStorage.setItem("userstate", userState)

            // check if the user has been Enter his / her name or no in the local storage
            dialogShown = "done"
            localStorage.setItem("dialog", dialogShown)
            document.body.style.overflow = "auto";

            // Main Cookies
            document.cookie = `name=${localStorage.getItem("name")}; expires=Thu, 30 Dec 2025 12:00:00 UTC; path=/; SameSite=Lax`;

            // Reload
            location.reload()

            // close the dialog
            dialogCookies.close()
        }
        else {
            // user State
            userState = "normal";
            localStorage.setItem("userstate", userState)

            // Main Cookies
            document.cookie = `name=${localStorage.getItem("name")}; expires=Thu, 30 Dec 2025 12:00:00 UTC; path=/; SameSite=Lax`;

            // check if the user has been Enter his / her name or no in the local storage
            dialogShown = "done"
            localStorage.setItem("dialog", dialogShown)
            document.body.style.overflow = "auto";

            // Reload
            location.reload()

            // close the dialog
            dialogCookies.close()
        }
    }
    else {
        dialogName.placeholder = "Please Enter A Name 😤"
        localStorage.removeItem("name")
    }
}