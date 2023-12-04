export default function daumCode() { //daum 주소
  new daum.Postcode({
      oncomplete: function(data) {
          // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

          // 우편번호와 주소 정보를 해당 필드에 넣는다.
          document.getElementById("address1").value = data.zonecode;

          document.getElementById("address2").value = data.address;
      }
  }).open();
}
