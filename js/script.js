$(function() {


/*-------------------------------------------
Load Page
---------------------------------------------*/
		



/*-------------------------------------------
Ajax link page transitions
---------------------------------------------*/

	$("a.ajax-link").live("click", function(){
		$this = $(this);
		var link = $this.attr('href');
		var current_url = $(location).attr('href');	
		
		if( link != current_url && link != '#' ) { 
		$.ajax({
			url:link,
			processData:true, 
			dataType:'html', 
			success:function(data){
				document.title = $(data).filter('title').text(); 
				current_url = link;
        if (typeof history.pushState != 'undefined') history.pushState(data, 'Page', link);
        
          setTimeout(function(){						
          $('#preloader').delay(50).fadeIn(600);
          $('html, body').delay(1000).animate({ scrollTop:  0  },1000);						
					
					setTimeout(function(){
							
            $('#ajax-content').html($(data).filter('#ajax-content').html());
            $('#fullscreen-sidebar').html($(data).filter('#fullscreen-sidebar').html());

						$('body').waitForImages({
							finished: function() {
								Website();
								backLoading();
								$('.opacity-nav').delay(50).fadeOut(600);
              },										
              waitForAll: true
						});								
					},1000);
					},0);
			}
		});
    }
    return false;
	});


/*-------------------------------------------
When you click back arrow
---------------------------------------------*/


function backLoading() {  
    $(window).on("popstate", function () {
        $('body').fadeOut('slow',function(){
            location.reload();
        });
        $('body').fadeIn();
    });
}   

/*-------------------------------------------
Load Page - next Open Site
---------------------------------------------*/

function Website() {
		CheckScripts();		
		Masonry();
		LoadEffect();
		SidebarFixed();
		backgroundmenu();
		ScrollUp();
		Formularz();
		// Parallax
		if ($(window).width() > 1023) {
      if ($('.parallax-background').length) {
        $(".parallax-background").parallax();
      }
    }
		
		setTimeout(function(){
			$(".preloader").fadeOut(500);							
		},2000);
		setTimeout(function(){
			$('header').fadeIn();							
		},500);
}


/*--------------------------------------------------
Function SidebarFixed
---------------------------------------------------*/	
function SidebarFixed() {

if ($(window).width() > 1179) {
   $('#sidebar-fixed').hcSticky({ top: 0, bottomEnd: 200 });	
}

	
}	


/*--------------------------------------------------
Formularz
---------------------------------------------------*/	
function Formularz() {

  $(document).ready(function() {
      $("#submit_btn").click(function() { 
          //Pobieramy dane
          var user_name       = $('input[name=name]').val(); 
          var user_email      = $('input[name=email]').val();
          var user_message    = $('textarea[name=message]').val();
          
         //Prosta walidacja (kolorujemy na czerwono pole jeœli jest puste
          var proceed = true;
          if(user_name==""){ 
              $('input[name=name]').css('border-color','red');
              $('input[name=name]').css('border','1px solid red');  
              proceed = false;
          }
          if(user_email==""){ 
              $('input[name=email]').css('border-color','red'); 
              $('input[name=email]').css('border','1px solid red');  
              proceed = false;
          }
          if(user_message=="") {  
              $('textarea[name=message]').css('border-color','red'); 
              $('textarea[name=message]').css('border','1px solid red');  
              proceed = false;
          }

          //wszystko w porz¹dku idziemy dalej
          if(proceed) 
          {
              //Dane do wys³ania
              post_data = {'userName':user_name, 'userEmail':user_email, 'userMessage':user_message};
              
              //Przes³anie danych poprzez AJAX
              $.post('contact_me.php', post_data, function(response){  

                  //wczytanie danych zwrotnych JSON
          if(response.type == 'error')
          {
            output = '<div class="error">'+response.text+'</div>';
          }else{
              output = '<div class="success">'+response.text+'</div>';
            
            //resetujemy wszystkie wartoœci
            $('#contact_form input').val(''); 
            $('#contact_form textarea').val(''); 
          }
          
          $("#result").hide().html(output).slideDown();
              }, 'json');
        
          }
      });
      
      //resetujemy kolorowanie po zaczêciu pisania
      $("#contact_form input, #contact_form textarea").keyup(function() { 
          $("#contact_form input, #contact_form textarea").css('border-color','#f1f1f1'); 
          $("#result").slideUp();
      });
      
  });
}

/*-------------------------------------------
Init and check list scripts
---------------------------------------------*/

function CheckScripts() {

  $(document).ready(function(){
    preloaderCheck();
    Typewriting();
    sidebarhero();
    sliderhero();
  });

}

function ScrollUp() {

	$("#back-to-top").hide();
	$(function () {
		$(window).scroll(function(){
      if ($(window).scrollTop()>100){
      $("#back-to-top").fadeIn(1500);
      }
        else
        {
        $("#back-to-top").fadeOut(1500);
        }
		});
		//back to top
		$("#back-to-top").click(function(){
		$('body,html').animate({scrollTop:0},1000);
      return false;
      });
		});

}




/*-------------------------------------------
Masonry Check Script
---------------------------------------------*/

function Masonry() {

  var $container = $('.portfolio-grid');
  // init
  $container.isotope({
    // options
    masonry: {
      gutter: 30,
      layoutMode: 'fitRows',
      columnWidth: '.grid-sizer'
    },
    itemSelector: 'li',
    
  });

}


/*-------------------------------------------
Effect
---------------------------------------------*/

function LoadEffect() {

	setTimeout( function(){

  $(".text-intro" ).animate({ marginTop: '150px', opacity: 1 }, 1000);

	}, 2000);


}


/*-------------------------------------------
Multi purpose init Background menu
---------------------------------------------*/

function backgroundmenu() {

  $(document).ready(function(){
     if($("#header-fade").length) {

         $(window).scroll(function(){
            if ($(this).scrollTop() > 10) {
                $('header').fadeOut();
            } else {
                $('header').fadeIn();
            }
        }); 
     }
     
     if($("#header-white").length) {

         $(window).scroll(function(){
            if ($(this).scrollTop() > 10) {
                $('header').css( "background", "white" );
                $('header .logo > a').css( "borderBottom", "0" );

            } else {
                $('header').css( "background", "none" );
            }
        }); 
     }

   
  });

}

/*-------------------------------------------
Typewriting init script
---------------------------------------------*/

function Typewriting() {


$(document).ready(function(){
	setTimeout( function(){
		if($("#site-type").length) {
        $("h1 span").typed({
            strings: ["template ", "UI kit "],
            typeSpeed: 100,
            backDelay: 500,
            loop: false,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
        });
    }
	}, 3000);
});
}


/*-------------------------------------------
Amazing Fade with scroll Sidebar
---------------------------------------------*/

function sidebarhero() {

  if($("#hero").length) {
    var fadeStart=10,fadeUntil=200,fading = $('#hero');

    $(window).bind('scroll', function(){
        var offset = $(document).scrollTop()
            ,opacity=0
        ;
        if( offset<=fadeStart ){
            opacity=1;
        }else if( offset<=fadeUntil ){
            opacity=1-offset/fadeUntil;
        }
        fading.css('opacity',opacity);
    });
  } 
}

/*-------------------------------------------
Amazing Fade with scroll Sidebar
---------------------------------------------*/

function sliderhero() {

  if($("#hero-slider").length) {
    var fadeStart=300,fadeUntil=1000,fading = $('#hero-slider');

    $(window).bind('scroll', function(){
        var offset = $(document).scrollTop()
            ,opacity=0
        ;
        if( offset<=fadeStart ){
            opacity=1;
        }else if( offset<=fadeUntil ){
            opacity=1-offset/fadeUntil;
        }
        fading.css('opacity',opacity);
    });
  } 
}


/*-------------------------------------------
Open Check Scription
---------------------------------------------*/

function OpenCheck() {
    setTimeout(function() {
        hidePreloader();
    }, 1000);
}


/*-------------------------------------------
Check Preloader
---------------------------------------------*/

function preloaderCheck() {
    showPreloader();
    $(window).load(function() {
        hidePreloader();
    });
}

/*-------------------------------------------
Functions Show / Hide Preloader
---------------------------------------------*/

function showPreloader() {
  $(".preloader").fadeIn("slow");
}

function hidePreloader() {
  $(".preloader").delay(2000).fadeOut("slow");
}



})//End