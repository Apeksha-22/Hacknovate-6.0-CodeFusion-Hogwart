const { shell, ipcRenderer } = require('electron');
const fs = require('fs-extra');
const path = require('path');

let selectedFilePath = '';
let userXP = parseInt(localStorage.getItem('userXP')) || 0;
let currentPath = require('os').homedir();
let historyStack = [];
const fileViewer = document.getElementById('file-viewer');
const breadcrumb = document.getElementById('breadcrumb');
const sidebar = document.getElementById('sidebar');
const xpDisplay = document.getElementById("xp-display");
const xpBar = document.getElementById("xp-bar");

window.addEventListener("DOMContentLoaded", () => {
    const sidebarElement = document.getElementById("sidebar");
    if (!sidebarElement) {
        console.error("Sidebar container not found!");
        return;
    }

    historyStack.push(currentPath); // Add home to history for back to work initially
    loadSidebar(require('os').homedir(), sidebarElement);
    loadFiles(currentPath);
});

// 📂 Load Sidebar Directory Tree
function loadSidebar(dirPath, parentElement) {
    parentElement.innerHTML = ''; // Clear sidebar before reloading

    function createSidebarItem(folderPath, folderName, parent) {
        let container = document.createElement('div');
        container.classList.add('sidebar-folder');

        let folderToggle = document.createElement('span');
        folderToggle.textContent = "▶"; // Collapsed state
        folderToggle.classList.add('folder-toggle');

        let folderElement = document.createElement('span');
        folderElement.textContent = "📂 " + folderName;
        folderElement.classList.add('folder-name');
        folderElement.dataset.path = folderPath;

        let subFolderContainer = document.createElement('div');
        subFolderContainer.classList.add('sidebar-subfolders');
        subFolderContainer.style.display = "none"; // Hidden by default

        folderToggle.onclick = () => {
            if (subFolderContainer.style.display === "none") {
                subFolderContainer.style.display = "block";
                folderToggle.textContent = "▼"; // Expanded state
                loadSubFolders(folderPath, subFolderContainer);
            } else {
                subFolderContainer.style.display = "none";
                folderToggle.textContent = "▶"; // Collapsed state
            }
        };

        folderElement.onclick = () => {
            loadFiles(folderPath);
        };

        container.appendChild(folderToggle);
        container.appendChild(folderElement);
        container.appendChild(subFolderContainer);
        parent.appendChild(container);
    }

    function loadSubFolders(folderPath, parent) {
        parent.innerHTML = '';
        fs.readdir(folderPath, { withFileTypes: true }, (err, files) => {
            if (err) return console.error("Error loading subfolders:", err);
            files.filter(file => file.isDirectory()).forEach(subDir => {
                createSidebarItem(path.join(folderPath, subDir.name), subDir.name, parent);
            });
        });
    }

    createSidebarItem(require('os').homedir(), "Home", parentElement);
}

function updateBreadcrumb(dirPath) {
    breadcrumb.innerHTML = '';
    const parts = dirPath.split(path.sep);
    let fullPath = '';

    parts.forEach((part, index) => {
        if (!part) return;
        fullPath += (index === 0 && process.platform === 'win32') ? part : path.sep + part;

        const span = document.createElement('span');
        span.textContent = part;
        span.style.cursor = 'pointer';
        span.style.marginRight = '5px';
        span.onclick = () => loadFiles(fullPath);

        breadcrumb.appendChild(span);
        if (index < parts.length - 1) breadcrumb.appendChild(document.createTextNode(' / '));
    });
}

// 📂 Load Files in Main Explorer
async function loadFiles(dirPath) {
    fileViewer.innerHTML = '';
    updateBreadcrumb(dirPath);
    currentPath = dirPath;

    if (!localStorage.getItem(dirPath)) {
        userXP += 5;
        updateXP(false);
        localStorage.setItem(dirPath, 'visited');
    }

    try {
        let files = await fs.readdir(dirPath, { withFileTypes: true });
        let fileList = await Promise.all(files.map(async (file) => {
            let filePath = path.join(dirPath, file.name);
            let stats = await fs.stat(filePath);
            return {
                name: file.name,
                path: filePath,
                isDirectory: file.isDirectory(),
                size: stats.size,
                modified: stats.mtimeMs,
                type: file.isDirectory() ? "folder" : path.extname(file.name).toLowerCase()
            };
        }));

        let sortOption = document.getElementById("sort-options").value;
        fileList = sortFiles(fileList, sortOption);

        fileList.forEach(file => {
            const fileElement = document.createElement('div');
            fileElement.textContent = file.name;
            fileElement.classList.add('file-item');
            fileElement.dataset.type = file.type;

            if (file.isDirectory) {
                fileElement.classList.add('folder-item');
                fileElement.textContent = "📂 " + file.name;
                fileElement.onclick = () => {
                    historyStack.push(currentPath);
                    fileElement.classList.add('hidden-passage');
                    setTimeout(() => loadFiles(file.path), 500);
                };
            } else {
                fileElement.ondblclick = () => openFile(file.path);
                fileElement.draggable = true;
                fileElement.ondragstart = (e) => {
                    e.dataTransfer.setData('text/plain', file.path);
                };

                fileElement.onmouseenter = () => {
                    if (file.type === ".txt" || file.type === ".md") {
                        fs.readFile(file.path, 'utf-8', (err, data) => {
                            if (err) return;
                            const preview = document.createElement('div');
                            preview.classList.add('file-preview');
                            preview.textContent = data.slice(0, 200);
                            fileElement.appendChild(preview);
                        });
                    }
                };

                fileElement.onmouseleave = () => {
                    const preview = fileElement.querySelector('.file-preview');
                    if (preview) fileElement.removeChild(preview);
                };
            }

            fileElement.oncontextmenu = (e) => {
                e.preventDefault();
                selectedFilePath = file.path;
                ipcRenderer.invoke('show-context-menu');
            };

            fileViewer.appendChild(fileElement);
        });

    } catch (err) {
        console.error("Error loading files:", err);
    }
}

// 📌 Sorting Function
function sortFiles(files, sortOption) {
    return files.sort((a, b) => {
        switch (sortOption) {
            case "name-asc": return a.name.localeCompare(b.name);
            case "name-desc": return b.name.localeCompare(a.name);
            case "size-asc": return a.size - b.size;
            case "size-desc": return b.size - a.size;
            case "date-asc": return a.modified - b.modified;
            case "date-desc": return b.modified - a.modified;
            case "type": return (b.isDirectory - a.isDirectory) || a.name.localeCompare(b.name);
            default: return 0;
        }
    });
}

// 🎮 Update XP Display & Bar
function updateXP(reload = true) {
    let previousXP = parseInt(localStorage.getItem('userXP')) || 0;
    xpDisplay.textContent = `XP: ${userXP}`;
    localStorage.setItem('userXP', userXP);

    let levelXP = 500;
    let progress = (userXP % levelXP) / levelXP * 100;
    xpBar.style.width = `${progress}%`;

    if (reload) {
        setTimeout(() => loadFiles(currentPath), 200);
    }

    if (previousXP < 100 && userXP >= 100) alert("✨ You unlocked the 'Restricted Section'!");
    if (previousXP < 250 && userXP >= 250) alert("🔮 You discovered the 'Room of Requirement'!");
    if (previousXP < 500 && userXP >= 500) alert("🐍 You gained access to the 'Chamber of Secrets'!");
}

// 🔙 Back Button
document.getElementById('back-btn').addEventListener('click', () => {
    console.log("History stack:", historyStack);
    if (historyStack.length > 0) {
        const prevPath = historyStack.pop();
        console.log("Going back to:", prevPath);
        loadFiles(prevPath);
    } else {
        console.log("No history to go back to.");
    }
});

// 🔍 Search Bar
let searchTimeout;
document.getElementById('search-bar').addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        const query = e.target.value.toLowerCase();
        document.querySelectorAll('.file-item').forEach(file => {
            file.style.display = file.textContent.toLowerCase().includes(query) ? 'block' : 'none';
        });
    }, 200);
});

// 🌙 Dark Mode Toggle
document.getElementById("dark-mode-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    
});

// 🧮 Sorting Change
document.getElementById("sort-options").addEventListener("change", () => {
    loadFiles(currentPath);
});

// ⏳ Time-Based XP Gain
setInterval(() => {
    userXP += 1;
    updateXP(false);
}, 60000);

// No duplicate loadFiles() call needed here.
