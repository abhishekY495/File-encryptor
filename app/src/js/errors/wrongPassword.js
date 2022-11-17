const messageBox = document.querySelector("#message-box");
const progressBarContainer = document.querySelector("#progress-bar-container");
const progressBar = document.querySelector("#progress-bar");
const resetBtn = document.querySelector("#reset-btn");
import { filesList } from "../browseFile.js";

export function wrongPassword() {
  progressBar.classList.remove("bg-[limegreen]");
  progressBar.classList.remove("bg-[#db3d3d]");
  progressBar.classList.remove("progress-on");
  progressBar.classList.add("bg-[red]");
  //
  progressBarContainer.classList.remove("bg-[#c86464]");
  progressBarContainer.classList.remove("bg-[#82de6f]");
  progressBarContainer.classList.add("opacity-80");
  //
  messageBox.innerHTML = "";
  messageBox.innerHTML = `Wrong Password`;
  messageBox.classList.remove("mx-2");
  messageBox.classList.add("m-auto");
  messageBox.classList.remove("shake-up-down");
  messageBox.classList.add("wrong-password-shake");
  messageBox.classList.remove("bg-neutral-100");
  messageBox.classList.add("bg-red-200");
  messageBox.classList.add("text-[red]");
  //
  resetBtn.disabled = false;
  resetBtn.classList.remove("opacity-10");

  if (filesList.length > 1) {
    window.sendNotification("Error", "Wrong Password/Files selected");
  } else {
    window.sendNotification("Error", "Wrong Password/File selected");
  }
}
