const task = document.getElementById("task-form")
const input = document.getElementById("task-input")
const list = document.getElementById("task-list")
const totalTasks = document.getElementById("total-tasks")
const completeTasks = document.getElementById("complete-tasks")


task.addEventListener("submit", function(event){
    event.preventDefault();
    const text = input.value;
    if (text === ""){
        return;
    }
    const li = document.createElement("li");
    li.classList.add("item")

    const checkbox = document.createElement("input")
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox")

    const span = document.createElement("span")
    span.classList.add("name")
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
    countTasks();
    
})


list.addEventListener("change", function(event){
    if (event.target.type === "checkbox"){
        const item = event.target.parentElement;
        if(event.target.checked){
            item.classList.add("completed");

        }else{
            item.classList.remove("completed");
        }
        countTasks();
    }
})

list.addEventListener("click", function(event){
    if (event.target.tagName === "BUTTON"){
        event.target.parentElement.remove();
        countTasks();
    }
})

function countTasks(){
    const total = list.children.length;
    const done = list.querySelectorAll("input:checked").length;

    totalTasks.textContent = total + " tasks";
    completeTasks.textContent = done + " completed";

}

countTasks();