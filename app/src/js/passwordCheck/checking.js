const messageBox = document.querySelector("#message-box-2");
const checkPasswordBtn = document.querySelector("#check-password-btn");

export const checkingAnimation = () => {
  checkPasswordBtn.disabled = true;
  checkPasswordBtn.classList.add("opacity-50", "hover:cursor-not-allowed");
  checkPasswordBtn.classList.remove("hover:opacity-90");
  messageBox.classList.remove("hidden", "opacity-10");
  messageBox.classList.add(
    "fixed",
    "bottom-[70px]",
    "w-[400px]",
    "animate-pulse"
  );
  messageBox.innerHTML = "";
  messageBox.innerHTML = "Checking";
};
