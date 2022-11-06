const passwordInput = document.querySelector("#password-input");
const togglePasswordBtn = document.querySelector("#toggle-password");

togglePasswordBtn.addEventListener("click", togglePassword);
function togglePassword() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePasswordBtn.innerText = "Hide";
  } else {
    passwordInput.type = "password";
    togglePasswordBtn.innerText = "Show";
  }
}
