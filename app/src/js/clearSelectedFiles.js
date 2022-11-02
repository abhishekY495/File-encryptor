const clearBtn = document.querySelector('#clear-btn');
clearBtn.addEventListener('click', () => {
    filesList = [];
    selectedFiles.innerHTML = '';
    clearBtn.classList.add('hidden');
});