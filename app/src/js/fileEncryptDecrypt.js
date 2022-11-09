import { filesList } from "./browseFile.js";
import { noPasswordInput } from "./errors/noPasswordInput.js";
import { noFilesSelected } from "./errors/noFilesSelected.js";
import { wrongPassword } from "./errors/wrongPassword.js";
import { disableUI } from "./disableUI.js";
import { encryptionProgress } from "./progressBar/encryptionProgress.js";
import { decryptionProgress } from "./progressBar/decryptionProgress.js";
import { encryptionDone } from "./done/encryptionDone.js";
import { decryptionDone } from "./done/decryptionDone.js";

const passwordInput = document.querySelector("#password-input");
const encryptBtn = document.querySelector("#encrypt-btn");
const decryptBtn = document.querySelector("#decrypt-btn");

encryptBtn.addEventListener("click", () => {
  clickHandler(window.encryptFile, encryptionDone, encryptionProgress);
});
decryptBtn.addEventListener("click", () => {
  clickHandler(window.decryptFile, decryptionDone, decryptionProgress);
});

function clickHandler(operation, doneFunc, progressFunc) {
  const password = passwordInput.value;
  if (filesList.length === 0) {
    noFilesSelected();
  } else if (password.length === 0) {
    noPasswordInput();
  } else {
    disableUI();
    progressFunc();
    Promise.all(
      filesList.map((fileLocation) => {
        return operation(fileLocation, password);
      })
    )
      .then(() => {
        filesList.map((file) => {
          window.unlinkSync.unlinkSync(file);
        });
        doneFunc();
      })
      .catch((err) => wrongPassword());
  }
}
