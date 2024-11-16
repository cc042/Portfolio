// Form
const form = document.querySelector(".whatsapp")
const TextArea = document.querySelector("textarea")
const Email = document.querySelector("#EmailAdress")
const PhoneNumer = document.querySelector("#PhoneNumer")
const name1 = document.querySelector("#firstName")
const name2 = document.querySelector("#secondName")

// Send
const send = document.querySelector(".SubmitForm")

// Clear Form
const Clear_Form = document.querySelector(".Clear_Form")

// Saved Data
const savedText = document.querySelector(".savedText")

// Error
const error = document.querySelector(".Error")
const ErrorMessage = document.querySelector("#ErrorMessage")
const ErrorClose = document.querySelector(".closeError")

// Succses
const Succses = document.querySelector(".Sucsses")
const SucssesMessage = document.querySelector("#SucssesMessage")
const SuccsesClose = document.querySelector(".closeSucsses")

function submittion() {
	var SavedText = `
	Name: ${name1.value.trim()} ${name2.value.trim()}
	%0AEmail: ${Email.value.trim()}
	%0APhone Number: ${PhoneNumer.value.trim()}`;

	var Saved_Text = SavedText.replaceAll("%0A", "<br>");
	localStorage.setItem("Saved_Message", Saved_Text);

	// Send the text to the WhatsApp number
	let text = `
	Name: ${name1.value.trim()} ${name2.value.trim()}
	%0AEmail: ${Email.value.trim()}
	%0APhone Number: ${PhoneNumer.value.trim()}
	%0AMessage: ${TextArea.value}`;

	window.open(`https://api.whatsapp.com/send?phone=+2001225073533&text=${text}`, "_blank")

	// Say Sended
	speechSynthesis.speak(new SpeechSynthesisUtterance("Sended"))
}if (localStorage.getItem('Saved_Message') == null) {
	savedText.innerHTML = `Name:<br>Email:<br>Phone Number:`;
	Clear_Form.style.boxShadow = "0 0 20px var(--bittersweet-shimmer)"
} else {
	savedText.innerHTML = localStorage.getItem('Saved_Message');
	Clear_Form.style.boxShadow = "0 0 20px #FFDB70"
}

function Clear_Contact() {
	if (localStorage.getItem('Saved_Message') == null) {
		error.showModal()
		ErrorMessage.textContent = "There Is No SomeThing Stored To Remove"
		ErrorClose.addEventListener("click", () => { error.close() })
	}
	else {
		Succses.showModal()
		SucssesMessage.textContent = "Saved Data Removed successfully"
		SuccsesClose.addEventListener("click", () => { Succses.close() })
		Clear_Form.style.boxShadow = "0 0 20px var(--bittersweet-shimmer)";
		localStorage.removeItem("Saved_Message");
		savedText.innerHTML = "Name:<br>Email:<br>Phone Number:";
	}
}

form.addEventListener("submit", submittion)
Clear_Form.addEventListener("click", Clear_Contact)