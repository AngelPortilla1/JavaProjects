const taskinput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('taskList');

const STORAGE_KEY = 'todoTasks_v1';
let tasks = [];

function saveTasks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function loadTasks() {
    const raw = localStorage.getItem(STORAGE_KEY);
    tasks = raw ? JSON.parse(raw) : [];
}

function createTaskElement(task) {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = task.text;

    if (task.completed) {
        li.classList.add('completed');
    }

    const btnGroup = document.createElement('div');
    btnGroup.className = 'btn-group';

    const completeBtn = document.createElement('button');
    completeBtn.className = 'complete-button';
    completeBtn.textContent = task.completed ? 'Deshacer' : 'Completar';
    completeBtn.addEventListener('click', function () {
        task.completed = !task.completed;
        saveTasks();
        renderTasks();
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-button';
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.addEventListener('click', function () {
        tasks = tasks.filter(t => t.id !== task.id);
        saveTasks();
        renderTasks();
    });

    btnGroup.appendChild(completeBtn);
    btnGroup.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(btnGroup);

    return li;
}

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const el = createTaskElement(task);
        taskList.appendChild(el);
    });
}

function addTask() {
    const taskText = taskinput.value.trim();
    if (taskText === '') {
        alert('Por favor ingresa una tarea válida.');
        return;
    }

    const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false
    };
    tasks.push(newTask);
    saveTasks();
    renderTasks();
    taskinput.value = '';
    taskinput.focus();
}

addTaskButton.addEventListener('click', addTask);
taskinput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

// Inicialización
loadTasks();
renderTasks();
