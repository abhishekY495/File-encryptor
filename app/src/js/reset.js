// Containers
const fileBrowseContainer = document.querySelector("#browse-container");
const passwordContainer = document.querySelector("#password-container");
const selectedFilesContainer = document.querySelector("#files-container");
const encryptDecryptBtnContainer = document.querySelector("#encrypt-decrypt-btn-container");
// Buttons
const fileSelectBtn = document.querySelector("#file-picker");
const folderSelectBtn = document.querySelector("#folder-picker");
const clearAllBtn = document.querySelector("#clear-btn");
const encryptBtn = document.querySelector("#encrypt-btn");
const decryptBtn = document.querySelector("#decrypt-btn");
const resetBtn = document.querySelector("#reset-btn");
// Password
const passwordInput = document.querySelector("#password-input");
// Progress
const progressBarContainer = document.querySelector("#progress-bar-container");
const progressBar = document.querySelector("#progress-bar");
const messageBox = document.querySelector("#message-box");
// Files
const selectedFiles = document.querySelector("#selected-files");
import { filesList } from "./browseFile.js";

resetBtn.addEventListener("click", reset);
function reset() {
  fileSelectBtn.disabled = false;
  folderSelectBtn.disabled = false;
  encryptBtn.disabled = false;
  decryptBtn.disabled = false;
  decryptBtn.disabled = false;
  passwordInput.disabled = false;
  clearAllBtn.disabled = true;
  //
  fileBrowseContainer.classList.remove("opacity-40");
  passwordContainer.classList.remove("opacity-40");
  selectedFilesContainer.classList.remove("opacity-40");
  encryptDecryptBtnContainer.classList.remove("opacity-40");
  //
  progressBarContainer.classList.remove("bg-[#82de6f]");
  progressBarContainer.classList.remove("bg-[#c86464]");
  progressBarContainer.classList.remove("opacity-80");
  progressBarContainer.classList.add("opacity-10");
  progressBar.classList.remove("bg-[red]");
  //
  messageBox.innerHTML = "";
  messageBox.classList.remove("w-fit");
  messageBox.classList.add("mx-2");
  messageBox.classList.add("my-[10px]");
  messageBox.classList.remove("m-auto");
  messageBox.classList.add("opacity-10");
  messageBox.classList.remove("shake-up-down");
  messageBox.classList.remove("wrong-password-shake");
  messageBox.classList.add("bg-neutral-100");
  messageBox.classList.remove("bg-red-200");
  messageBox.classList.remove("text-[red]");
  //
  resetBtn.disabled = true;
  resetBtn.classList.add("opacity-10");
  //
  filesList.length = 0;
  selectedFiles.innerHTML = "";
  passwordInput.value = "";
}
