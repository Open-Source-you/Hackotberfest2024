// Select the elements
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// Event listener for the Add button
addBtn.addEventListener("click", function () {
    const taskText = todoInput.value;

    if (taskText === "") {
        alert("Please enter a task!");
    } else {
        // Create a new list item
        const listItem = document.createElement("li");
        listItem.innerHTML = `${taskText} <button class="delete-btn">Delete</button>`;

        // Append the list item to the todo list
        todoList.appendChild(listItem);

        // Clear the input field
        todoInput.value = "";

        // Add event listener to the delete button
        const deleteBtn = listItem.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", function () {
            todoList.removeChild(listItem);
        });
    }
});
