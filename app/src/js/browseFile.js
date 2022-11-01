const browseFilesBtn = document.querySelector('#file-picker');
const browseFoldersBtn = document.querySelector('#folder-picker');
const selectedFiles = document.querySelector('#selected-files');
const clearBtn = document.querySelector('#clear-btn');
export let filesList = [];

browseFilesBtn.addEventListener('change', (e) => getFiles(e));
browseFoldersBtn.addEventListener('change', (e) => getFilesFromFolder(e));

function getFiles(e) {
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
            clearBtn.classList.remove('hidden');
        } else return;
    }
}

function getFilesFromFolder(e) {
    const files = e.target.files;
    for (let file in files) {
        const fileRelativePath = files[file].webkitRelativePath;
        const filePath = files[file].path;
        if (fileRelativePath) {
            const element = `
            <li class="list-none w-full px-2 py-px text-start border-b-2 border-neutral-700 hover:bg-neutral-800">
                ${fileRelativePath}<span class="pl-2 w-full"></span>
            </li>`;
            selectedFiles.innerHTML += element;
            filesList.push(filePath);
            clearBtn.classList.remove('hidden');
        } else return;
    }
}

// Clear Selected files
clearBtn.addEventListener('click', () => {
    filesList = [];
    selectedFiles.innerHTML = '';
    clearBtn.classList.add('hidden');
});