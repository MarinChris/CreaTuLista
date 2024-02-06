const todos = JSON.parse(localStorage.getItem('todos')) || [];
const alerta = document.getElementById('alerta');

const actualizaTodos = (todos) =>{
    const todoStrings = JSON.stringify(todos);
    localStorage.setItem('todos', todoStrings);
}

const render = () =>{
    const todoList = document.getElementById('todo-list')
        const todosTemplate = todos.map( t => '<li>' + t + '</li>');
        todoList.innerHTML = todosTemplate.join('')
        const elementos = document.querySelectorAll('#todo-list li');
        elementos.forEach ((elemento, i) =>{
            elemento.addEventListener('click',() =>{
                elemento.parentNode.removeChild(elemento)
                todos.splice( i , 1 );
                actualizaTodos(todos); //F
                render(); //F
            });
        });
};

window.onload = () => {
    render();
    const form = document.getElementById('todo-form');
    form.onsubmit = (e) => {
        e.preventDefault();
        const todo = document.getElementById('todo');
        const todoText = todo.value.trim();
        // Validar que el campo no esté vacío antes de agregar la tarea
        if (todoText === '') {
            alerta.style.display = 'flex';         
        } else{
            alerta.style.display = 'none';
            todo.value = '';
            todos.push(todoText);
            actualizaTodos(todos);
            render();
        }
    };
};