const selectedFiles = document.querySelector("#selected-files-text");

export function noFilesSelected() {
  selectedFiles.classList.add("shake-selected-files");
  selectedFiles.innerText = "👆 Select Files 👆";
  setTimeout(() => {
    selectedFiles.classList.remove("shake-selected-files");
    selectedFiles.innerText = "Selected Files";
  }, "1000");
}