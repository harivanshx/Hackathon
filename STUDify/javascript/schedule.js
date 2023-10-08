// Get references to HTML elements
const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

// Add a new task to the list
addButton.addEventListener("click", function() {
    const taskText = todoInput.value.trim();
    
    if (taskText !== "") {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            ${taskText}
            <button class="delete-button">Delete</button>
        `;
        
        todoList.appendChild(listItem);
        todoInput.value = "";

        // Add event listener to delete button
        const deleteButton = listItem.querySelector(".delete-button");
        deleteButton.addEventListener("click", function() {
            listItem.remove();
        });
    }
});
