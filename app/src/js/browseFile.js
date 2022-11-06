const browseFilesBtn = document.querySelector("#file-picker");
const browseFoldersBtn = document.querySelector("#folder-picker");
const selectedFiles = document.querySelector("#selected-files");
const clearBtn = document.querySelector("#clear-btn");
export let filesList = [];

browseFilesBtn.addEventListener("change", (e) => getFiles(e));
browseFoldersBtn.addEventListener("change", (e) => getFilesFromFolder(e));

browseFilesBtn.addEventListener("click", (e) => (e.target.value = null));
browseFoldersBtn.addEventListener("click", (e) => (e.target.value = null));

function getFiles(e) {
  filesList = [];
  const files = e.target.files;
  for (let file in files) {
    const fileName = files[file].name;
    const filePath = files[file].path;
    if (fileName) {
      const element = `
        <li class="list-none w-full px-2 py-px text-start border-b-2 border-neutral-700 hover:bg-neutral-800">
            ${fileName}<span class="pl-2 w-full"></span>
        </li>`;
      selectedFiles.innerHTML += element;
      filesList.push(filePath);
      clearBtn.classList.remove("opacity-10");
      clearBtn.disabled = false;
    } else return;
  }
}

function getFilesFromFolder(e) {
  filesList = [];
  const files = e.target.files;
  for (let file in files) {
    const filePathName = files[file].webkitRelativePath;
    const filePath = files[file].path;
    if (filePathName) {
      const element = `
        <li class="list-none w-full px-2 py-px text-start border-b-2 border-neutral-700 hover:bg-neutral-800">
            ${filePathName}<span class="pl-2 w-full"></span>
        </li>`;
      selectedFiles.innerHTML += element;
      filesList.push(filePath);
      clearBtn.classList.remove("opacity-10");
      clearBtn.disabled = false;
    } else return;
  }
}
