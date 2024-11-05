// admin Settings
const designModeCheckBox = document.querySelector("#Sure1")
const fileManager = document.querySelector("input")

window.addEventListener("change", () => {
    if (designModeCheckBox.checked) {
        designModeEnabled()
    }
    else if (!designModeCheckBox.checked) {
        designModedisabled()
    }
})

function designModeEnabled() {
    document.designMode = "on"
}

function designModedisabled() {
    document.designMode = "off"
}

// User Settings
const Change_User_Name = document.querySelector(".Changing")

Change_User_Name.addEventListener("click", () => {
    dialogShown = "notdone"
    localStorage.setItem('dialog', dialogShown)
    dialogCookies.showModal()
})