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

export default topButton;