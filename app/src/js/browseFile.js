const browseFilesBtn = document.querySelector('#file-picker');
const browseFoldersBtn = document.querySelector('#folder-picker');
const filesContainer = document.querySelector('#files-container');
export const filesList = [];

browseFilesBtn.addEventListener('change', (e) => getFiles(e));
browseFoldersBtn.addEventListener('change', (e) => getFiles(e));

function getFiles(e) {
    const files = e.target.files;
    for (let file in files) {
        const filePath = files[file].path;
        if (filePath) {
            const element = `<li class="list-none w-full px-2 py-px text-start">${filePath}<span class="pl-2"></span></li><hr class="bg-zinc-700 h-px border-none sticky left-0">`;
            filesContainer.innerHTML += element;
            filesList.push(filePath);
        } else return;
    }
}