const todoForm = document.getElementById('todoForm');
const list = document.getElementById('todoList');
let todoInput = document.getElementById('todo');

//목록 추가
function addTodo(){

  let result = document.createElement('li');
  console.log(result);
  let delBtn = document.createElement('button');

  if(todoInput.value == false){
    alert('할일을 입력하세요');
  }else{
    result.innerHTML = todoInput.value;
    list.appendChild(result);

    result.appendChild(delBtn);
    console.log(delBtn);
    delBtn.innerText = '🙌';
    delBtn.addEventListener('click', delTodo);
  }
  
  todoInput.value = '';
  todoInput.focus(); 
  result.addEventListener('click', 
    function(){
      result.style.textDecoration = "line-through";
    }
  )

}

// 목록 삭제 버튼
function delTodo(e){
  let removeList = e.target.parentElement;
  removeList.remove();
}