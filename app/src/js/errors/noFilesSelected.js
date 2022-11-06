const selectedFiles = document.querySelector("#files-container-title");

export function noFilesSelected() {
  selectedFiles.classList.add("shake-files-container-title");
  selectedFiles.classList.add("bg-neutral-300");
  selectedFiles.classList.add("text-black");
  selectedFiles.classList.add("rounded-sm");
  selectedFiles.innerText = "👆 Select Files 👆";
  setTimeout(() => {
    selectedFiles.classList.remove("shake-files-container-title");
    selectedFiles.classList.remove("bg-neutral-300");
    selectedFiles.classList.remove("text-black");
    selectedFiles.classList.remove("rounded-sm");
    selectedFiles.innerText = "Selected Files";
  }, "1000");
}
