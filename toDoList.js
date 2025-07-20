const addButton = document.getElementById("add");
const inputBox = document.querySelector(".searchBox");
const taskBar = document.querySelector(".tasksMenu");
const nullMessage = document.getElementById("null");
const nullMessage2 = document.querySelector(".null");
const preLine = document.querySelector("pre");

// Initial Display State
showNullIfNeeded();

// Add Task Event
addButton.addEventListener("click", () => {
    const inputValue = inputBox.value.trim();
    if (inputValue !== "") {
        createTask(inputValue);
        inputBox.value = "";
        showNullIfNeeded();
    }
});

// Create New Task Element
function createTask(text) {
    const task = document.createElement("div");
    task.className = "task";

    const content = document.createElement("div");
    content.className = "content";
    content.textContent = text;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.innerHTML = "&times;";

    task.appendChild(content);
    task.appendChild(deleteButton);
    taskBar.appendChild(task);

    // Toggle Completed
    content.addEventListener("click", () => {
        if (content.innerHTML.includes("<s>")) {
            content.innerHTML = text;
            content.style.backgroundColor = "transparent";
        } else {
            content.innerHTML = `<s>${text}</s>`;
            content.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
        }
        preLine.innerHTML = "==";
    });

    // Delete Task
    deleteButton.addEventListener("click", () => {
        task.remove();
        showNullIfNeeded();
    });
}

// Show/Hide "No Tasks"
function showNullIfNeeded() {
    const tasks = document.querySelectorAll(".task");
    if (tasks.length === 0) {
        nullMessage.style.display = "flex";
        nullMessage2.style.display = "flex";
    } else {
        nullMessage.style.display = "none";
        nullMessage2.style.display = "none";
    }
}
