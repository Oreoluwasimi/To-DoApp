const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");



function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    } else{
        let task = document.createElement("li");
        task.innerHTML = inputBox.value;
        listContainer.appendChild(task);
        let deleteTask = document.createElement("span");
        deleteTask.innerHTML = "\u00d7";
        task.appendChild(deleteTask);
    }
    inputBox.value = "";
    saveTasks();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
       
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        
    }
    saveTasks();
    
}, false)

function saveTasks(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTasks(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTasks();





