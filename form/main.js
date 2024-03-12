document.addEventListener("DOMContentLoaded", function() {
  // 초기에 첫 번째 탭과 해당 내용을 활성화
  document.getElementById("tab1").classList.add("on");
  document.getElementById("tabContent1").classList.add("on");
  document.getElementById("text1").classList.add("on");

  // 각 탭에 대한 클릭 이벤트 추가
  let tabs = document.querySelectorAll(".tabMenu ul li");
  tabs.forEach(function(tab) {
      tab.addEventListener("click", function() {
          // 모든 탭과 내용 비활성화
          document.querySelectorAll(".tabMenu ul li").forEach(function(item) {
              item.classList.remove("on");
          });
          document.querySelectorAll(".input_wrap").forEach(function(content) {
              content.classList.remove("on");
          });
          document.querySelectorAll(".text ul li").forEach(function(content) {
              content.classList.remove("on");
          });

          // 선택한 탭 활성화
          tab.classList.add("on");

          // 해당 탭 내용 활성화
          var tabId = tab.getAttribute("id");
          var contentId = "tabContent" + tabId.substring(3); // "tab1" -> "1"
          var textId = "text" + tabId.substring(3);

          if (document.getElementById(contentId)) {
              document.getElementById(contentId).classList.add("on");
          }

          if (document.getElementById(textId)) {
              document.getElementById(textId).classList.add("on");
          }
      });
  });
});
