const selectedFiles = document.querySelector("#files-container-title");

export function noFilesSelected() {
  selectedFiles.classList.add("shake-files-container-title");
  selectedFiles.innerText = "👆 Select Files 👆";
  setTimeout(() => {
    selectedFiles.classList.remove("shake-files-container-title");
    selectedFiles.innerText = "Selected Files";
  }, "1000");
}