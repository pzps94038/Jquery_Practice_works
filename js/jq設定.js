$(document).ready(function () {
    // 條件隱藏
    $(window).scroll(function (event) {
        if ($("html").scrollTop() > 50) {
          $('.top').fadeIn(300);
        } else {
          $('.top').fadeOut(300);
        }
      });
    // 滾動到最上面
    $('.top').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop:0
        },1000)
    });
    // 下拉式選單
    $('.nav>li>a').click(function (e) { 
        e.preventDefault();
        $(this).parent().find("ul").slideToggle();
        $(this).parent().siblings().find('ul').slideUp();
    });
});