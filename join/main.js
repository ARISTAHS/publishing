// const slider = document.querySelector('.slider');

// document.addEventListener('click', (e)=>{
//   const items = document.querySelectorAll('li.item');

//   if(e.target.matches('.next')){
//     slider.append(items[0]);
//   }
//   if(e.target.matches('.prev')){
//     slider.prepend(items[items.length - 1]);
//   }

// })


// 위의 스크립트를 아래에 조금 더 줄여보자

/*
const slider = document.querySelector('.slider');

document.addEventListener('click', (e)=>{
  const items = document.querySelectorAll('li.item');

   // 논리연산자 사용하여 조건들을 따짐 (short-circuit evaluation => '단축평가')
  e.target.matches('.next') && slider.append(items[0]);
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);

})
*/


// 다시 한번 바꾸되, 함수를 바꿔보자
const slider = document.querySelector('.slider');

document.addEventListener('click', activate);

function activate(e){
  const items = document.querySelectorAll('li.item');

  e.target.matches('.next') && slider.append(items[0]);
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}
