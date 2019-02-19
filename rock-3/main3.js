var height=$(window).height();
   var ST=$(window).scrollTop();
     if(ST<height)ST {
     $(window).scroll(function(){
        $(".inside").css("opacity", 1 - $(window).scrollTop() / 100);
     });
    } else if(ST>height && ST<height*2)ST{
      {$(".inside2").css("opacity", 1 - $(window).scrollTop() / 100);
       });
      }
    