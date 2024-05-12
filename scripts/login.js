import { getFormData } from "./handlers/form.handler.js";

document.getElementById("loginForm").addEventListener("submit", function (event) {
	event.preventDefault();
	const { username, password } = getFormData(event.target);

	if (username === "OvidioMelhorProfessor" && password === "senha123") {
		window.location.href = "/";
	} else {
		document.getElementById("errorMsg").style.display = "block";
	}
});

document.getElementById("username").addEventListener("input", toggleLoginButton);
document.getElementById("password").addEventListener("input", toggleLoginButton);

function toggleLoginButton() {
	const { username, password } = getFormData(document.getElementById("loginForm"));

	var loginBtn = document.getElementById("loginBtn");

	if (username.trim() !== "" && password.trim() !== "") {
		loginBtn.disabled = false;
	} else {
		loginBtn.disabled = true;
	}
}
