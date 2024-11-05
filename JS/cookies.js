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

setTimeout(() => {
    if (localStorage.getItem("dialog") !== "done") {
        dialogCookies.showModal()
        document.body.style.overflow = "hidden"
    }
    else {
        dialogCookies.close()
    }
}, 1000)

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