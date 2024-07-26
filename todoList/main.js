const todoForm = document.getElementById('todoForm');
const list = document.getElementById('todoList');
const todoInput = document.getElementById('todo');


function handleTodo(event){
  event.preventDefault();

  console.log(todoInput.value);
}

todoForm.addEventListener('submit', handleTodo);