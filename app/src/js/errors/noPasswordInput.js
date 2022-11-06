const passwordInput = document.querySelector("#password-input");

export function noPasswordInput() {
  passwordInput.classList.add("shake-password-box");
  setTimeout(() => {
    passwordInput.classList.remove("shake-password-box");
  }, "500");
}
