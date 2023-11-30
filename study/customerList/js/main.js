// 페이지 상단 이동
const topBtn = document.querySelector('#footerArea .topMove');
const handleScroll = () =>{
  const sorollY = window.scrollY || document.documentElement.scrollTop;; //높이 계산 
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
};
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
};

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
  });
});

//메모 박스
const memoBtn = document.querySelectorAll('.memo-btn');
const memoBox = document.querySelectorAll('.memo-box');

document.querySelectorAll('.memo-btn').forEach(memoBtn => {
  memoBtn.addEventListener('click', function () {
    // 현재 클릭된 버튼이 속한 엘리먼트 탐색
    const td = this.closest('td');
    if (td) {
      // 현재 클릭된 버튼이 속한 행 찾기
      const tr = td.closest('tr');
      // 현재 클릭된 버튼이 속한 행 내의 다른 td 엘리먼트들을 찾아서 memo-box를 숨김
      tr.querySelectorAll('td').forEach(otherTd => {
        if (otherTd !== td) {
          const otherMemoBox = otherTd.querySelector('.memo-box');
          if (otherMemoBox) {
            otherMemoBox.classList.remove('on');
          }
        }
      });
      // 현재 클릭된 버튼이 속한 td 내부의 memo-box만 활성화
      const memoBox = td.querySelector('.memo-box');
      if (memoBox) {
        memoBox.classList.add('on');
      }
    }
  });
});

document.querySelectorAll('.close-btn').forEach(closeBtn => {
  closeBtn.addEventListener('click', function () {
    // 현재 클릭된 닫기 버튼이 속한 엘리먼트 탐색
    const memoBox = this.closest('.memo-box');
    memoBox.classList.remove('on');
  });
});

// document.querySelectorAll('.close-btn').forEach(closeBtn => {
//   closeBtn.addEventListener('click', function () {
//     const memoBox = this.closest('.memo-box');
//     memoBox.classList.remove('on');
//   });
// });


  // if(close.addEventListener === true){
  //   memoBox.classList.remove('on');
  // };


// document.querySelectorAll('.close-btn').forEach(close => {
//   close.addEventListener('click', function(e){
//     // 현재 클릭된 닫기 버튼이 속한 엘리먼트 탐색
//     const div = this.closest('div');

//     const closeBtn = document.querySelector('#closeBtn');
//     const closeBtn2 = document.querySelector('#closeBtn2');
//     if(e.target === closeBtn || e.target === closeBtn2){
//       const memoBox = div.querySelector('.memo-box');
//       memoBox.style.display = 'none';
//     };
//   });
// });

// document.addEventListener( 'click', (e) => {
//   const closeBtn = document.querySelector('#closeBtn');
//   const closeBtn2 = document.querySelector('#closeBtn2');
//   if(e.target === closeBtn || e.target === closeBtn2){
//     memoBox.style.display='none';
//   }
// });
