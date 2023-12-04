// 페이지 상단 이동
const topBtn = document.querySelector('#footerArea .topMove');
const handleScroll = () =>{
   //높이 계산 후 높이에 따라 영역 보이기
  const sorollY = window.scrollY || document.documentElement.scrollTop;;
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

function checkboxGroup(currentCheckbox) {
  const checkboxes = document.querySelectorAll('.client-kind td input');
  let checkedCount = 0;
  
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checkedCount++;
      if (checkboxes[i] !== currentCheckbox) {
        checkboxes[i].checked = false;
      }
    }
  };
}

//주소 검색 
function daumCode() { //daum 주소
  new daum.Postcode({
      oncomplete: function(data) {
          // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

          // 우편번호와 주소 정보를 해당 필드에 넣는다.
          document.getElementById("address1").value = data.zonecode;

          document.getElementById("address2").value = data.address;
      }
  }).open();
}