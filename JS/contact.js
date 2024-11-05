// Contanct Form
const form = document.querySelector(".whatsapp")
const TextArea = document.querySelector("textarea")
const Email = document.querySelector("#EmailAdress")
const PhoneNumer = document.querySelector("#PhoneNumer")
const name1 = document.querySelector("#firstName")
const name2 = document.querySelector("#secondName")
const send = document.querySelector(".SubmitForm")
const savedText = document.querySelector(".savedText")

function submittion() {
	var SavedText = `
	Name: ${name1.value.trim()} ${name2.value.trim()}
	%0AEmail: ${Email.value.trim()}
	%0APhone Number: ${PhoneNumer.value.trim()}`;

	var Saved_Text = SavedText.replaceAll("%0A", "<br>")

	// Send the text to the WhatsApp number
	let text = `
	Name: ${name1.value.trim()} ${name2.value.trim()}
	%0AEmail: ${Email.value.trim()}
	%0APhone Number: ${PhoneNumer.value.trim()}
	%0AMessage: ${TextArea.value}`;

	window.open(`https://api.whatsapp.com/send?phone=+2001225073533&text=${text}`, "_blank")

	// Say Sended
	speechSynthesis.speak(new SpeechSynthesisUtterance("Sended"))
}

form.addEventListener("submit", submittion)
savedText.innerHTML = localStorage.getItem('Saved_Message')