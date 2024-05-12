document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "OvidioMelhorProfessor" && password === "senha123") {
      window.location.href = "cadastro.html";
    } else {
      document.getElementById("errorMsg").style.display = "block";
    }
  });

  document.getElementById("username").addEventListener("input", toggleLoginButton);
  document.getElementById("password").addEventListener("input", toggleLoginButton);

  loginBtn.style.background = "gray";
  function toggleLoginButton() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var loginBtn = document.getElementById("loginBtn");
    
    if (username.trim() !== "" && password.trim() !== "") {
      loginBtn.disabled = false;
      loginBtn.style.background = "green";
    } else {
        loginBtn.disabled = true;
        loginBtn.style.background = "gray";
    }
  }