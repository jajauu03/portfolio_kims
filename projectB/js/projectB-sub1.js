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
    
    

//스크롤 top버튼 유동적으로 올라가게
$( '.scroll' ).click( function() {
    $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
    return false;
} );


$("nav > div > ul").hide();
// nav의 하위메뉴 숨기고 시작
if($(window).width() > 640){
    $("nav > div").hover(function(){
        $(this).addClass("on");
        $("nav > div").not(this).removeClass("on");
        $(this).children("ul").slideToggle(300);
        //this의 자식 요소를 슬라이드다운
        $("nav > div").not(this).children("ul").slideUp(300);
        //this와 관계없는 자식 요소를 슬라이드업
    });
   }
});