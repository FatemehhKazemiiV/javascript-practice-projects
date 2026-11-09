let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

// Get saved tasks
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Convert old tasks to objects if needed
tasks = tasks.map(function(task) {
    if (typeof task === "string") {
        return {
            text: task,
            completed: false
        };
    }
    return task;
});

// Save tasks
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Create a task
function createTask(task, index) {

    let li = document.createElement("li");

    // Create task text
    let taskText = document.createElement("span");
    taskText.innerText = task.text;

    if (task.completed) {
        taskText.classList.add("completed");
    }

    taskText.style.cursor = "pointer";

    // Toggle completed
    taskText.addEventListener("click", function() {

        task.completed = !task.completed;

        saveTasks();
        refreshTasks();

    });

    li.appendChild(taskText);

    // Create delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("deleteBtn");

    li.appendChild(deleteBtn);

    // Delete task
    deleteBtn.addEventListener("click", function(event) {

        event.stopPropagation();

        tasks.splice(index, 1);

        saveTasks();
        refreshTasks();

    });

    taskList.appendChild(li);
}

// Display tasks
function displayTasks() {

    tasks.forEach(function(task, index) {
        createTask(task, index);
    });

}

// Refresh task list
function refreshTasks() {

    taskList.innerHTML = "";
    displayTasks();

}

// Add new task
addBtn.addEventListener("click", function() {

    let task = taskInput.value.trim();

    if (task !== "") {

        tasks.push({
            text: task,
            completed: false
        });

        saveTasks();
        refreshTasks();

        taskInput.value = "";

    }

});

// Show saved tasks
displayTasks();
