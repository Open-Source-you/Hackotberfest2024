document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        return; // Do nothing if input is empty
    }

    const li = document.createElement('li');
    li.textContent = taskText;
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        li.classList.toggle('completed', checkbox.checked);
    });

    // Create a button to remove tasks
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
        li.remove();
    });

    li.prepend(checkbox);
    li.appendChild(removeButton);
    document.getElementById('taskList').appendChild(li);

    taskInput.value = ''; // Clear input field
}
