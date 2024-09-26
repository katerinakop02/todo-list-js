const todoList = [];

renderTodoList();

function renderTodoList() {

    let todoListHTML = '';

    todoList.forEach((todoObject, index) => {
        const name = todoObject.name;
        const dueDate = todoObject.dueDate;
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button class="delete-button">Delete</button>
        `;
        todoListHTML += html;
    });

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;

    document.querySelectorAll('.delete-button') 
    .forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            todoList.splice(index, 1);
            renderTodoList();
        });
    });
}

document.body.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
        addTodo();
    }
});

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const dateInputElement = document.querySelector('.js-due-date-input');
    //value represents text in the textbox
    const name = inputElement.value;
    const dueDate = dateInputElement.value;
    console.log(name);
    console.log(dueDate);

    todoList.push({name: name, dueDate: dueDate});

    inputElement.value = '';

    renderTodoList();
}