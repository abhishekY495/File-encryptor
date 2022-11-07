const progressBarContainer = document.querySelector("#progress-bar-container");
const progressBar = document.querySelector("#progress-bar");
const messageBox = document.querySelector("#message-box");

export function decryptionProgress() {
  progressBar.classList.remove("bg-[#db3d3d]");
  progressBar.classList.add("bg-[limegreen]");
  progressBar.classList.add("progress-on");
  //
  progressBarContainer.classList.remove("bg-[#c86464]");
  progressBarContainer.classList.add("bg-[#82de6f]");
  progressBarContainer.classList.remove("opacity-10");
  //
  messageBox.innerHTML = "";
  messageBox.classList.remove("mx-2");
  messageBox.classList.add("m-auto");
  messageBox.classList.remove("opacity-10");
  messageBox.classList.add("w-fit");
  messageBox.innerHTML = `Decrypting Files <span class="text-[limegreen]">&nbsp●&nbsp</span> Do Not Close`;
}
