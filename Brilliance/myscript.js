$(".scrolling").scrollFlight();

// MENU OFFSET
var lastTop = $(window).scrollTop();
$(window).on("scroll",function(e) {
    var offset = $(window).scrollTop();
    var diff = offset - lastTop;
    if(diff > 0) {
      $(".menu").addClass("hide");
    } else if(diff < 0) {
      $(".menu").removeClass("hide");
    }
    lastTop = offset;
});

// MENU SCROLL 
$(".page").on("arriving rearriving",function() {
  // Grab find the href of the menu it to go to
  var href='#' + this.id;
  // Unselect the current menu item
  $(".menu a.selected").removeClass("selected");
  // Add a class of selected to the menu item with this page as an anchor
  $(".menu").find("a[href='" + href + "']").addClass("selected");
});
// Optional support for smooth scroll
$(".menu a").on("click",function(e) {
  // prevent the browser from jumping
  e.preventDefault();
  // Get the position of the page 
  var top = $($(this).attr('href')).position().top;
  // Animate to the body to scroll to the proper place
  $('html, body').stop().animate({ scrollTop: top });
});


// TEXT FADE IN
$("h1,h2,h4").on("arrived",function(e) {
  $(this).addClass("on-page");
});

$("h3").on("arriving",function(e) {
  $(this).addClass("on-page");
});

$(".iframe-cover, #bg-3").on("arriving",function(e) {
	$(this).addClass("appeared");
});

$(".arrow-scroll").on("departing",function(e){
	$(this).addClass("leave-page");
});

// I WILL FIGURE THIS OUT
/* jQuery(function($) {
  function fixImg() {
    var $fixed = $('.fake-bg');
    if ($(window).scrollTop() > 1900) {
    	$fixed.addClass("get-fixed");
    });
    else {
     $fixed.addClass("not-fixed");
      });
  }
  $(window).scroll(fixImg);
  fixDiv();
});
*/