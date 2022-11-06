import { filesList } from "./browseFile.js";
const clearBtn = document.querySelector("#clear-btn");
const selectedFiles = document.querySelector("#selected-files");

clearBtn.addEventListener("click", () => {
  filesList.length = 0;
  selectedFiles.innerHTML = "";
  clearBtn.classList.remove("opacity-100");
  clearBtn.classList.add("opacity-10");
  clearBtn.disabled = true;
});
