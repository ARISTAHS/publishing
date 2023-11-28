// 페이지 상단 이동
const body = document.querySelector('body');
const main = document.querySelector('body main');
const topBtn = document.querySelector('#footerArea .topMove');

const handleScroll = () =>{
  const sorollY = window.scrollY || document.documentElement.scrollTop;; //높이 계산 
  if( sorollY > 100 ){
    topBtn.style.opacity='1';
  }else{
    topBtn.style.opacity='0';
  }
};
topBtn.onclick = (e) =>{ 
  e.preventDefault();
  window.scrollTo({
    top:0,
    behavior:'smooth'
  });
};

handleScroll(); //초기 상태 설정
window.addEventListener('scroll', handleScroll);
