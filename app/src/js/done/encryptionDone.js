const messageBox = document.querySelector("#message-box");
const progressBarContainer = document.querySelector("#progress-bar-container");
const progressBar = document.querySelector("#progress-bar");
const resetBtn = document.querySelector("#reset-btn");

export function encryptionDone() {
  progressBar.classList.remove("bg-[limegreen]");
  progressBar.classList.remove("bg-[#db3d3d]");
  progressBar.classList.remove("progress-on");
  //
  progressBarContainer.classList.remove("bg-[#82de6f]");
  progressBarContainer.classList.add("bg-[#c86464]");
  progressBarContainer.classList.add("opacity-80");
  //
  messageBox.innerHTML = "";
  messageBox.innerHTML = `🔴 Encryption Completed`;
  messageBox.classList.remove("w-[290px]");
  messageBox.classList.add("w-fit");
  messageBox.classList.add("shake-up-down");
  //
  resetBtn.disabled = false;
  resetBtn.classList.remove("opacity-10");
}
