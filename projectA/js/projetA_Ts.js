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
});

$(document).ready(function(){

    //탭메뉴 공지사항
    $(".tit span").click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        $("#"+$(this).data('id')).addClass('on').siblings().removeClass('on');
    });
    
    //탭메뉴 후기
    $(".reviewimg .cir01").click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        $("#"+$(this).data('id')).addClass('on').siblings().removeClass('on');
    });

    //태블릿 메뉴버튼 누르면 열리기
    if(($(window).width() < 1025)&&($(window).width() > 640)){
        $(".mmenubt").click(function(){
            $(".subnav").addClass("on");
            $(this).toggle().next().show();
        
        });
        $(".mclosebt").click(function(){
            $(".subnav").removeClass("on");
            $(this).toggle().prev().show();
        });
        //태블릿 스팬영역 누르면 서브메뉴 열리기
        $(".nav div:first-child").click(function(){
            $(this).next().toggleClass("on");
            $(".material-icons").toggle();
        });

    }
   
      
       
        //모바일 메뉴 버튼 누르면 열리기,닫히기
        else if($(window).width() < 641){
            $(".mmenubt").click(function(){
                $(".nav").addClass("on");
                $(".material-icons").toggleClass("on").toggle();
            });
            $(".mclosebt").click(function(){
                $(".nav").removeClass("on");
                $(".material-icons").toggleClass("on").toggle();
            });
            $(".nav div:first-child span").click(function(){
                $(this).addClass('on').siblings().removeClass('on');
                $("#"+$(this).data('id')).addClass('on').siblings().removeClass('on');
            });
        }
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
});
