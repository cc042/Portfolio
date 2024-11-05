document.querySelector(".Load").showModal();
document.body.style.overflow = "hidden"

window.onload = () => {
    document.body.style.overflow = "auto"
    document.querySelector(".Load").close()

    if (localStorage.getItem("userstate") !== "admin") {
        document.querySelector("#adminsettings").remove()
    }
}
