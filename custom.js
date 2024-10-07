$(document).ready(function () {
  // 포트폴리오 - 탭
  $(".portfolio_btns button").click(function (e) {
    $(this).addClass("on");
    $(this).siblings().removeClass("on");
    let index = $(".portfolio_btns button").index(this);
    // console.log(index);

    //모든 div의 on 클래스 제거
    $(".tab_contents .items").removeClass("on");
    //클릭된 index에 해당하는 div에 on 추가
    $(".tab_contents .items:eq(" + index + ")").addClass("on");
  });
});
