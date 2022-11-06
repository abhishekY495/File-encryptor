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
// Password
const passwordInput = document.querySelector("#password-input");

export function disableUI() {
  fileSelectBtn.disabled = true;
  folderSelectBtn.disabled = true;
  clearAllBtn.disabled = true;
  encryptBtn.disabled = true;
  decryptBtn.disabled = true;
  passwordInput.disabled = true;
  //
  clearAllBtn.classList.add("opacity-10");
  fileBrowseContainer.classList.add("opacity-40");
  passwordContainer.classList.add("opacity-40");
  selectedFilesContainer.classList.add("opacity-40");
  encryptDecryptBtnContainer.classList.add("opacity-40");
}
