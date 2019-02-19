var height=$(window).height();
   var ST=$(window).scrollTop();
     if(ST<height)ST
     $(window).scroll(function(){
        $(".inside").css("opacity", 1 - $(window).scrollTop() / 100);
     }); 
     else if(ST>height && ST<height*2)ST
      $(window).scroll(function(){
         $(".inside2").css("opacity", 1 - $(window).scrollTop() / 100);
       });
       else if(ST>height*2 && ST<height*3)ST
       $(window).scroll(function(){
          $(".inside3").css("opacity", 1 - $(window).scrollTop() / 100);
        });
        else if(ST>height*3 && ST<height*4)ST
        $(window).scroll(function(){
           $(".inside4").css("opacity", 1 - $(window).scrollTop() / 100);
         });
         else if(ST>height*4 && ST<height*5)ST
         $(window).scroll(function(){
            $(".inside5").css("opacity", 1 - $(window).scrollTop() / 100);
          });
          else if(ST>height*5 && ST<height*6)ST
          $(window).scroll(function(){
             $(".inside6").css("opacity", 1 - $(window).scrollTop() / 100);
           });
           else if(ST>height*6 && ST<height*7)ST
           $(window).scroll(function(){
              $(".inside7").css("opacity", 1 - $(window).scrollTop() / 100);
            });
            else if(ST>height*7 && ST<height*8)ST
            $(window).scroll(function(){
               $(".inside8").css("opacity", 1 - $(window).scrollTop() / 100);
             });
             else if(ST>height*8 && ST<height*9)ST
             $(window).scroll(function(){
                $(".inside9").css("opacity", 1 - $(window).scrollTop() / 100);
              });
              else if(ST>height*9 && ST<height*10)ST
              $(window).scroll(function(){
                 $(".inside1").css("opacity", 1 - $(window).scrollTop() / 100);
               });