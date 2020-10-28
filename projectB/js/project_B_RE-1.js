
$(document).ready(function(){
//리사이징 할때마다 새로고침
var lastWidth = $(window).width();
$(window).resize(function(){
    if($(window).width()!=lastWidth){
        location.reload();
        lastWidth = $(window).width();
        return false;
    }
});  

$(document).ready(function(){
//태블릿,모바일 나브영역
if($(window).width() < 1025){
    $(".mbt").click(function(){
        $(".mgnb").toggleClass("on");
        $(".mbta").toggleClass("on");
        return false;
    });

        // 2차 메뉴 열기
    $(".mdepth1-t").click(function(){
        $(this).toggleClass("on");
        $(".mdepth1-t").not(this).removeClass('on');
        $(this).next().slideToggle(300);
        //this 다음 요소를 슬라이드토글
        $(".mdepth1-t").not(this).next().slideUp(300);
        //this가 아니라면 다음 요소는 슬라이드업
        return false;
        //a href="#"을 클릭했을때 목적지가 없어서 리프레시 되는것을 막음
    });
            
    $(".selected").click(function(){
        $(".select_list").show(300); 
            return false;
        });
    }
});

 //스크롤 top버튼 감춰져있다가 나타나게
 $( window ).scroll( function() {
    if ( $( this ).scrollTop() > 350 ) {
        $( '.scroll' ).fadeIn();
    } else {
        $( '.scroll' ).fadeOut();
    }
} );
//스크롤 top버튼 유동적으로 올라가게
$( '.scroll' ).click( function() {
    $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
    return false;
} );
      //로고 클릭시 슬릭 원하는 페이지로 이동
  jQuery(document).ready(function(){
    $(".logo").click(function(e){
      e.preventDefault();
        var home = $(this).data('slide');
        $('.vertical-slider').slick('slickGoTo', home - 1 );
        //선택자의 데이터슬라이드값을 받아와서 변수처리 하여 인덱스이동
    });

  });
  
});
  
