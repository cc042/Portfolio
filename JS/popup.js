// Adham
const adhamdialog = document.querySelector(".adhamdialog")
const closeAdham = document.querySelector(".closeadham")
const people1 = document.querySelector(".people1")
people1.addEventListener("click", () => { adhamdialog.showModal() })
closeAdham.addEventListener("click", () => { adhamdialog.close() })
// Me
const youssefdialog = document.querySelector(".youssefdialog")
const closeyoussef = document.querySelector(".closeyoussef")
const people2 = document.querySelector(".people2")
people2.addEventListener("click", () => { youssefdialog.showModal() })
closeyoussef.addEventListener("click", () => { youssefdialog.close() })