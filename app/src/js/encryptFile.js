import { filesList } from "./browseFile.js";

const passwordInput = document.querySelector("#password-input");
const encryptBtn = document.querySelector("#encrypt-btn");
const decryptBtn = document.querySelector("#decrypt-btn");

encryptBtn.addEventListener("click", () => {
  const password = passwordInput.value;
  if (password && filesList) {
    filesList.map((fileLocation) => {
      window.file.encrypt(fileLocation, password);
    });
  } else {
    console.log("Enter Password");
  }
});

decryptBtn.addEventListener("click", () => {
  const password = passwordInput.value;
  if (password && filesList) {
    filesList.map((fileLocation) => {
      window.file.decrypt(fileLocation, password);
    });
  } else {
    console.log("Enter Password");
  }
});
