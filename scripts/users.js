import { getFormData } from "./handlers/form.handler.js";

document.getElementById("username").addEventListener("input", validarFormulario);
document.getElementById("password").addEventListener("input", validarFormulario);
document.getElementById("confirmPassword").addEventListener("input", validarFormulario);

document.getElementById("cadastroForm").addEventListener("submit", (event) => {
	event.preventDefault();
	const datas = getFormData(event.target);
	const message = document.getElementById("message");

	if (datas.password !== datas.confirmPassword) {
		message.textContent = "As senhas não coincidem.";
		message.style.color = "red";
	} else {
		message.textContent = "Cadastro realizado com sucesso!";
		message.style.color = "green";
	}
});

function validarFormulario() {
	const { username, password, confirmPassword } = getFormData(document.getElementById("cadastroForm"))
	const salvarBtn = document.getElementById("salvarBtn");
	if (
		username.length >= 4 &&
		password.length >= 6 &&
		confirmPassword.length >= 6 &&
		password === confirmPassword
	) {
		salvarBtn.disabled = false;
	} else {
		salvarBtn.disabled = true;
	}
}
