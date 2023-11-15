import { noPasswordInput } from "./errors/noPasswordInput.js";
import { checkingAnimation } from "../js/passwordCheck/checking.js";
import { hashFoundAnimation } from "../js/passwordCheck/hashFound.js";
import { hashNotFoundAnimation } from "../js/passwordCheck/hashNotFound.js";
import { errorAnimation } from "../js/passwordCheck/error.js";

const checkPasswordBtn = document.querySelector("#check-password-btn");
const passwordInputBox = document.querySelector("#password-input");

checkPasswordBtn.addEventListener("click", async () => {
  if (passwordInputBox.value.length !== 0) {
    const sha256Hash = window.generateSHA256Hash(passwordInputBox.value);
    const API_URL =
      "https://pangea-cloud-api.netlify.app/.netlify/functions/getUserIntelPassword?hash=" +
      sha256Hash.slice(0, 5);
    checkingAnimation();

    try {
      const respone = await fetch(API_URL);
      const data = await respone.json();
      console.log(data);
      const raw_data = data?.result?.raw_data;
      const hashesFound = Object.keys(raw_data);
      const ifHashFound = hashesFound.some((hash) => hash === sha256Hash);
      if (ifHashFound) {
        hashFoundAnimation(data);
      } else {
        hashNotFoundAnimation();
      }
    } catch {
      errorAnimation();
    }
  } else {
    noPasswordInput();
  }
});
