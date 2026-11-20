const task = document.getElementById("task-form")
const input = document.getElementById("task-input")
const list = document.getElementById("task-list")
const totalTasks = document.getElementById("total-tasks")
const completeTasks = document.getElementById("complete-tasks")


task.addEventListener("sumit", function(event){
    event.preventDefault();
    const text = input.value;
    if (text === ""){
        return;
    }
    const li = document.createElement("li");
    li.classList.add("task-item")

    const checkbox = document.createElement("input")
    checkbox.type = "checkbox";
    checkbox.classList.add("task-checkbox")

    const span = document.createElement("span")
    span.classList.add("task-name")
    span.textContent = text;

    const deleteBtn = document.createElement("button")
    deleteBtn.type = "button";
    deleteBtn.classList.add("task-delete")
    deleteBtn.textContent = "Delete";


    li.appendChild(checkbox)
    li.appendChild(span)
    li.appendChild(deleteBtn)

    list.appendChild(li);

    input.value = "";
    
})


list.addEventListener("change", function(event){
    
})