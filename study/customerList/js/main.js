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
const sideArea = document.querySelector('.sideNav #nav-total');
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

function clickNav(){
  const sideNav = document.querySelector('.sideNav-icon .icon-list button');
  sideNav.classList.toggle('on'); //아이콘에 on 클래스 추가 
}
function hideAllAreas(){
  const areas = document.querySelectorAll('.sideNav-area > li');
  const btns = document.querySelectorAll('.icon-list > button');

  areas.forEach(area => {
    area.style.display='none';
  });

  btns.forEach(button=>{
    button.classList.remove('on');
  });
}
function iconClick(clickedBtn) {
  const targetId = clickedBtn.id.replace('Btn', '');  // 'Btn' 부분을 삭제하여 ID 얻기
  const targetArea = document.getElementById(targetId);

  if (targetArea) {
    if (targetArea.style.display === 'block') {
      // 이미 보이는 상태이면 숨기고 on 클래스 제거
      targetArea.style.display = 'none';
      clickedBtn.classList.remove('on');
    } else {
      // 보이지 않는 상태이면 보이게 하고 on 클래스 추가
      hideAllAreas();
      targetArea.style.display = 'block';
      clickedBtn.classList.add('on');
    }
  } else {
    console.error(`Element with ID '${targetId}' not found.`);
  }
}
