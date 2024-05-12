document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("cadastroForm").addEventListener("submit", function (event) {
      event.preventDefault();
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
      var confirmPassword = document.getElementById("confirmPassword").value;
      var message = document.getElementById("message");

      if (password !== confirmPassword) {
        message.textContent = "As senhas não coincidem.";
        message.style.color = "red";
      } else {
        message.textContent = "Cadastro realizado com sucesso!";
        message.style.color = "green";
      }
    });

  document
    .getElementById("username")
    .addEventListener("input", validarFormulario);
  document
    .getElementById("password")
    .addEventListener("input", validarFormulario);
  document
    .getElementById("confirmPassword")
    .addEventListener("input", validarFormulario);

  salvarBtn.style.background = "gray";
  function validarFormulario() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var salvarBtn = document.getElementById("salvarBtn");

    if (
      username.length >= 4 &&
      password.length >= 6 &&
      confirmPassword.length >= 6 &&
      password === confirmPassword
    ) {
      salvarBtn.disabled = false;
      salvarBtn.style.background = "green";
    } else {
      salvarBtn.disabled = true;
      salvarBtn.style.background = "gray";
    }
  }

  document.getElementById("limparBtn").addEventListener("click", function () {
    document.getElementById("cadastroForm").reset();
    document.getElementById("message").textContent = "";
  });
});
