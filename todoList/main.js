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
  
  todoInput.value = ''; //목록 추가 후 입력창 초기화
  todoInput.focus(); //커서 강제 포커스
  result.addEventListener('click',   //추가 된 목록 list를 클릭시 밑줄 효과 추가
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


//다른 방식 추가 (input에 목록 입력후 엔터를 누를 경우)
function keyCodeCheck(){
  console.log(window.event);
  if(window.event.keyCode === 13 && todoInput.value !== ''){ //if 조건 두개 연결
    const newLi = document.createElement('li');
    const newSpan = document.createElement('span');
    const newBtn = document.createElement('button');

    newLi.appendChild(newBtn);
    newLi.appendChild(newSpan);

    newSpan.textContent = todoInput.value;

    list.appendChild(newLi);
    todoInput.value = ''; //list에 입력 후 input 초기화
  }
}