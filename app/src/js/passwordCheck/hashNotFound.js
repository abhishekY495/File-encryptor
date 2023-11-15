const messageBox = document.querySelector("#message-box-2");
const checkPasswordBtn = document.querySelector("#check-password-btn");
const encryptBtn = document.querySelector("#encrypt-btn");
const decryptBtn = document.querySelector("#decrypt-btn");

export const hashNotFoundAnimation = () => {
  messageBox.innerHTML = "";
  messageBox.innerHTML = `🟢 Password not found in breaches`;
  messageBox.classList.add("shake-up-down");
  messageBox.classList.remove("hidden");
  setTimeout(() => {
    checkPasswordBtn.disabled = false;
    encryptBtn.disabled = false;
    decryptBtn.disabled = false;
    encryptBtn.classList.remove("opacity-50", "hover:cursor-not-allowed");
    decryptBtn.classList.remove("opacity-50", "hover:cursor-not-allowed");
    checkPasswordBtn.classList.remove("opacity-50", "hover:cursor-not-allowed");
    checkPasswordBtn.classList.add("hover:opacity-90");
    messageBox.innerHTML = "";
    messageBox.classList.add("hidden");
    messageBox.classList.remove("shake-up-down", "animate-pulse");
  }, 2500);
};
