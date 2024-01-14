// 영업 일지 작성일 최종 일수 스크립트 
    //페이지 로드 후 실행
document.addEventListener('DOMContentLoaded', ()=>{
  const dateColorSpan = document.querySelector('#date-days');

  if(dateColorSpan){
    const matchResult = dateColorSpan.textContent.match(/\((\d+)\)/);

    if(matchResult){
      const day = parseInt(matchResult[1]);

      // 기존 클래스를 모두 제거
      dateColorSpan.classList.remove('date-color', 'blue-text', 'red-text');
      if(day <= 15){
        dateColorSpan.classList.add('date-color');
        dateColorSpan.style.display = 'block';
      }else if(16 <= day && day <= 30){
        dateColorSpan.classList.add('blue-text');
        dateColorSpan.style.display = 'block';
      }else if(31 <= day){
        dateColorSpan.classList.add('red-text');
        dateColorSpan.style.display = 'block';
      };
    }
  }
   
})
    
// 페이지 상단 이동
const topBtn = document.querySelector('#footerArea .topMove');
const handleScroll = () =>{
   //높이 계산 후 높이에 따라 영역 보이기
  const sorollY = window.scrollY || document.documentElement.scrollTop;
  if( sorollY > 100 ){
    topBtn.style.opacity='1';
  }else{
    topBtn.style.opacity='0';
  }
};
handleScroll(); //초기 상태 설정
window.addEventListener('scroll', handleScroll);

topBtn.onclick = (e) =>{ 
  e.preventDefault();
  window.scrollTo({
    top:0,
    behavior:'smooth'
  });
};
 
// nav 영역 
const menuBtn = document.querySelector('.sideNav .menu');
const sideArea = document.querySelector('.sideNav .nav-ul .nav-oparea');
const navLi = document.querySelector('.sidNav .nav-ul .nav-li');
const navBtn = document.querySelector('.sidNav .nav-ul .nav-li button');
const body = document.querySelector('body');

function sideMove(){
    // 메뉴 버튼을 눌렀을때 nav 영역 동작 
  if(sideArea.style.display === 'none'){
    sideArea.style.display = 'block';
    document.body.style.gridTemplateColumns = '250px 1fr';

  }else{
    sideArea.style.display = 'none';
    document.body.style.gridTemplateColumns = '60px 1fr';
  };
}
menuBtn.onclick = sideMove ; // 버튼을 클릭하면 숨기기, 다시 클릭하면 노출

    // 첫 로딩 상태에서 홈 아이콘 활성화
document.querySelector('.nav-li:first-child').classList.add('on');
document.querySelector('.nav-li:first-child div').classList.add('on');

function iconClick(clickedBtn){
  const clickedLi = clickedBtn.parentElement;
  const oparea = clickedLi.querySelector('.nav-oparea');

  document.querySelectorAll('.nav-li').forEach(li=>{
    li.classList.remove('on');
  });
  document.querySelectorAll('.nav-oparea').forEach(area => {
    area.classList.remove('on');
  });

    // 클릭된 버튼과 연결된 li와 영역을 활성화 상태로 설정
  clickedLi.classList.add('on');
  oparea.classList.add('on');
}

document.querySelectorAll('.nav-li button').forEach(btn=>{
  btn.addEventListener('click', function(){
    iconClick(this);
  })
});

    // menu-list 선택 활성화
document.querySelectorAll('.menu-list a').forEach(menuItem => {
  menuItem.addEventListener('click', function (e) {
    e.preventDefault();
    // 클릭된 메뉴 아이템에 'on' 클래스 추가
    this.classList.add('on');

    // 기존에 활성화된 메뉴 아이템의 'on' 클래스 제거
    document.querySelectorAll('.menu-list a').forEach(item => {
      if (item !== this) {
        item.classList.remove('on');
      }
    });
  })
});
 

//메모 창
document.querySelectorAll('.memo-btn').forEach(memoBtn => {
  memoBtn.addEventListener('click', function () {
     // 모든 메모 창을 찾아서 닫습니다.
     document.querySelectorAll('.memo-box').forEach(memoBox => {
      memoBox.classList.remove('on');
      });
    // 현재 클릭된 버튼이 속한 엘리먼트 탐색
    const td = this.closest('td');
    if (td) {
      // 현재 클릭된 버튼이 속한 td 내부의 memo-box만 활성화
      const memoBox = td.querySelector('.memo-box');
      if (memoBox) {
        memoBox.classList.add('on');
      }
    }
    //메모 창이 열린 뒤 닫기 버튼 활성화
    document.querySelectorAll('.close-btn').forEach(closeBtn => {
      closeBtn.addEventListener('click', function () {
        // 현재 클릭된 닫기 버튼이 속한 엘리먼트 탐색
        const memoBox = this.closest('.memo-box');
        memoBox.classList.remove('on');
      })
    });
  });
});

// document.querySelectorAll('.close-btn').forEach(closeBtn => {
//   closeBtn.addEventListener('click', function () {
//     // 현재 클릭된 닫기 버튼이 속한 엘리먼트 탐색
//     const memoBox = this.closest('.memo-box');
//     memoBox.classList.remove('on');
//   });
// });
 

//페이지 버튼
const totalPage = 50; 
const tr = document.querySelectorAll('.search-result-content table tbody tr');
const trNum = tr.length; 
const pageNum = Math.ceil(totalPage/trNum);
const pageWrap = document.querySelector('.pagination-container .page-num');

for(let i = 1 ; i<pageNum; i++){
  //ul에 태그 삽입
  pageWrap.innerHTML +=`<li><a href="#">${i}</a></li>`;
};
  // 특정 페이지 눌렀을시 활성화
const aBtn = pageWrap.querySelectorAll('a');
aBtn.forEach((button , index) => {
  button.addEventListener('click', (e)=>{
    e.preventDefault();
    for (let aB of aBtn) {
      aB.classList.remove('on');
    };
    e.target.classList.add('on');
    
    showTr(index);
  })
});
 //페이지 버튼을 눌렀을때 해당 버튼에 해당하는 tr 노출
function showTr(index){
  let start = index * totalPage;
  let end = start + totalPage;

  let trArray = Array.from(tr);
  for (let Tr of trArray) {
    Tr.style.display = 'none';
  };
  let newTr = trArray.slice(start,end);
  for (let nt of newTr) {
    nt.style.display = '';
  };
};
 

//키워드 박스 
document.addEventListener('DOMContentLoaded', function() {
  const options = document.querySelectorAll('.detail-list-item input');
  const resultArea = document.querySelector('.result-keyword ul');
  const keywordArea = document.querySelector('.keyword-area');

  options.forEach(option => {
    option.addEventListener('change', function() {
      updateResult();
    });
  });

  function updateResult() {
    resultArea.innerHTML = '';
    options.forEach(option => {
      if (option.checked) {
        const labelValue = option.nextElementSibling.textContent.trim();
        const li = document.createElement('li');
        li.textContent = labelValue;
        const closeBtn = document.createElement('button');
        closeBtn.type = 'button';
        closeBtn.classList.add('close-btn');
        li.appendChild(closeBtn);
        resultArea.appendChild(li);

         closeBtn.addEventListener('click',function(){
         li.style.display = 'none';
         if ([...resultArea.children].every(child => child.style.display === 'none')) {
          keywordArea.style.display = 'none';
        };
        });
      };
    });

    if (resultArea.children.length > 0) {
      keywordArea.style.display = 'block';
    } else {
      keywordArea.style.display = 'none';
    }
  }

    // 초기화 버튼을 누르면 모든 옵션 삭제 
  const resetBtn = document.querySelector('.reset-btn');
  resetBtn.addEventListener('click', function() {
    options.forEach(option => {
      option.checked = false;
    });
    updateResult();
  })

    // 조건 검색을 누르면 조건들에 해당하는 동작 실행
  const searchBtn = document.querySelector('.keyword-result');
  searchBtn.addEventListener('click', function() {
    // ????? 


    // ?????
  })
})
 

