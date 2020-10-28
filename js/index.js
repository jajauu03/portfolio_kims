// ---------------------------slick
(function($){
    $(function(){
      $('.vertical-slider').slick({
        arrows: false,
        dots: true,
        infinite: false,
        vertical: true,
        verticalSwiping: true,
      });
      //스크롤감지
      $('.vertical-slider').mousewheel(function(e) {
        if (e.deltaY < 0) {
          if($(this).slick('slickCurrentSlide') == $(this).find('.slide').length - 1) {
            return
          }
          
          e.preventDefault()
          $(this).slick('slickNext')
        }
        else {
          if($(this).slick('slickCurrentSlide') == 0) {
            return
          }
          
          e.preventDefault()
          $(this).slick('slickPrev')
        }
        
        });
      });
    }
  (jQuery));
  
  

 

  
  //로고 클릭시 슬릭 원하는 페이지로 이동
  jQuery(document).ready(function(){
    $(".logo, .s011").click(function(e){
      e.preventDefault();
        $('.vertical-slider').slick('slickGoTo', 0 );
        return false
       //선택자의 데이터슬라이드값을 받아와서 변수처리 하여 인덱스이동
    });
    $(".s022").click(function(e){
      e.preventDefault();
        $('.vertical-slider').slick('slickGoTo', 1 );
        return false
    });
    $(".s044").click(function(e){
      e.preventDefault();
        $('.vertical-slider').slick('slickGoTo', 3 );
        return false
    });
  });
