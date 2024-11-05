// sections
const aboutSection = document.querySelector(".InfoAbout")
const PortfolioSection = document.querySelector(".InfoPortofolio")
const contactSection = document.querySelector(".InfoContact")
const InfoLearn = document.querySelector(".InfoLearn")
const InfoSettings = document.querySelector(".InfoSettings")

// Radio Buttons
const AboutRadio = document.querySelector("#About").disabled = true
const PortfolioRadio = document.querySelector("#Portfolio")
const LearnRadio = document.querySelector("#Learn")
const ContactRadio = document.querySelector("#Contact")
const SettingsRadio = document.querySelector("#Settings")

// functions
const elementToggleFunc = (elem) => {
    elem.classList.add("active")
}

const RadioOn = (radio) => {
    radio.disabled = true
}

const elementRemoveFunc = (elem1, elem2, elem3, elem4) => {
    elem1.classList.remove("active");
    elem2.classList.remove("active");
    elem3.classList.remove("active");
    elem4.classList.remove("active");
}

const RadioOff = (radio1, radio2, radio3, radio4) => {
    radio1.disabled = false
    radio2.disabled = false
    radio3.disabled = false
    radio4.disabled = false
}

// applying The Functions on the radios
function AboutOn() {
    // storing the Numbers
    localStorage.setItem("tabNo", "1")

    // Toggle The ELements
    elementToggleFunc(aboutSection)
    RadioOn(AboutRadio)

    // inactive the radios
    RadioOff(PortfolioRadio, SettingsRadio, LearnRadio, ContactRadio)

    // inactive The Tabs
    elementRemoveFunc(PortfolioSection, InfoSettings, InfoLearn, contactSection)
}

function PortofolioOn() {
    // storing the Numbers
    localStorage.setItem("tabNo", "2")

    // Toggle The ELements
    elementToggleFunc(PortfolioSection)
    RadioOn(PortfolioRadio)

    // inactive the radios
    RadioOff(AboutRadio, SettingsRadio, LearnRadio, ContactRadio)

    // inactive The Tabs
    elementRemoveFunc(aboutSection, InfoSettings, LearnRadio, contactSection)
}

function LearnOn() {
    // storing the Numbers
    localStorage.setItem("tabNo", "3")

    // Toggle The ELements
    elementToggleFunc(InfoLearn)
    RadioOn(LearnRadio)

    // inactive the radios
    RadioOff(AboutRadio, PortfolioRadio, SettingsRadio, ContactRadio)

    // inactive The Tabs
    elementRemoveFunc(aboutSection, PortfolioSection, InfoSettings, contactSection)
}

function ContactOn() {
    // storing the Numbers
    localStorage.setItem("tabNo", "4")

    // Toggle The ELements
    elementToggleFunc(contactSection)
    RadioOn(ContactRadio)

    // inactive the radios
    RadioOff(AboutRadio, PortfolioRadio, SettingsRadio, LearnRadio)

    // inactive The Tabs
    elementRemoveFunc(aboutSection, PortfolioSection, InfoSettings, InfoLearn)
}

function SettingOn() {
    // storing the Numbers
    localStorage.setItem("tabNo", "5")

    // Toggle The ELements
    elementToggleFunc(InfoSettings)
    RadioOn(SettingsRadio)

    // inactive the radios
    RadioOff(AboutRadio, PortfolioRadio, ContactRadio, LearnRadio)

    // inactive The Tabs
    elementRemoveFunc(aboutSection, PortfolioSection, contactSection, InfoLearn)
}

// Check: What Is The Last tab User Has Been Entered
if (localStorage.getItem("tabNo") == "1") {
    AboutOn()
}
else if (localStorage.getItem("tabNo") == "2") {
    PortofolioOn()
}
else if (localStorage.getItem("tabNo") == "3") {
    LearnOn()
}
else if (localStorage.getItem("tabNo") == "4") {
    ContactOn()
}
else if (localStorage.getItem("tabNo") == "5") {
    SettingOn()
}