const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");



function addTask() {
    if (inputBox.value === "") {
        alert("You must write something!");
    } else {
        const task = createTaskElement(inputBox.value);
        listContainer.appendChild(task);
        addDeleteIcon(task);
    }

    inputBox.value = "";
    saveTasks();
}


//git 
function createTaskElement(taskText) {
    const task = document.createElement("li");
    task.textContent = taskText;
    return task;
}

function addDeleteIcon(task) {
    const deleteIcon = document.createElement("span");
    deleteIcon.textContent = "\u00d7";
    task.appendChild(deleteIcon);
}

listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
    saveTasks();
}, false);

function saveTasks() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTasks() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTasks();



