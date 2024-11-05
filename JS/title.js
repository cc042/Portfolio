const title = "CComet | Personal";
const comeBack = "Come Back 😪";
const goUp = document.querySelector(".ScrollWheel")

// Notifications
const noti = Notification.requestPermission().then(rq => {
    if (rq === "granted") {
        var noti = new Notification("Hello", {
            body: "Welcome To Our Website",
            icon: "images/Logo.png",
            tag: "Welcome",
        })
    }
})

// Blur And Focus
document.addEventListener("visibilitychange", () => {
    if (document.visibilityState == "hidden") { document.title = comeBack; }
    else { document.title = title }
})

// resizing the page
window.addEventListener("resize", () => {
    document.title = `${innerWidth} X ${innerHeight}`
    setTimeout(() => { document.title = title }, 2000)
})

// scroll
window.addEventListener("scroll", () => {
    document.title = `Keep Scrolling ${window.scrollY} 😁`
    setTimeout(() => { document.title = title }, 3000)
})

window.addEventListener("scrollend", () => {
    if (scrollY <= 100) {
        goUp.style.display = "none"
    }
    else {
        goUp.style.display = "flex"
        goUp.style.animation = "fade 1s ease"
        goUp.addEventListener("click", () => {
            scrollBy(0, -(document.body.offsetHeight))
            setTimeout(() => { document.title = title }, 2000)
        })
    }
})