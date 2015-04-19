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
$(".menu a, #article-title").on("click",function(e) {
  // prevent the browser from jumping
  e.preventDefault();
  // Get the position of the page 
  var top = $($(this).attr('href')).position().top;
  // Animate to the body to scroll to the proper place
  $('html, body').stop().animate({ scrollTop: top });
});


// CONTENT FADE IN
$(".chapter").on("arrived",function(e) {
  $(this).addClass("on-page");
});

$(".title").on("arrived",function(e) {
    $(this).addClass("appeared");
});

$(".title, .chapter").on("update",function(e,pos) {
    var diff = pos * 200 - 100;
    $(this).css({ transform: "translate(-50%,-" + diff + "px)" });
});

$("h3, .about").on("arriving",function(e) {
  $(this).addClass("on-page");
});

$(".iframe-cover, #bg-3, .ch1-cover").on("arriving",function(e) {
	$(this).addClass("appeared");
});

$(".ch1-cover").on("arrived",function(e) {
	$(this).addClass("transition");
});

$(".arrow-scroll").on("departing",function(e){
	$(this).addClass("leave-page");
});

//AFFIX IMAGES
/*
$("#chapterThree, #chapterFour").scrollFlight();

$("#chapterThree").on("departing",function(e) {
  if(e.currentTarget == $("#chapterThree")[0]) { 
     $("#chapterThree img").affix();
  }
});

$("#chapterFour").on("departing",function(e) {
  if(e.currentTarget == $("#chapterFour")[0]) { 
     $("#chapterFour img").affix();
  }
});
*/

// SCALE STATS

$("#widget2").on("update",function(e,pos) {
    if($(this).flightState() == "arrived") {
      var scale = pos * 5;
      console.log(scale);
      $(this).css({ transform: "scale(" + scale + ")" });
    }
})
$("#widget2").on("arrived",function() {
    $(this).addClass("arrived");
});
$("#widget2").on("departing",function() {
    $(this).css({ transform: "scale(1)" });
    $(this).affix();
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


//HOME SCREEN SCROLL FIX NAV
$(document).ready(function() {

	var scroll, wresize, mobile;
	var headerPos = $('.header-content').offset().top;
	var once = true;
	var init = false;
	var show, go;
	
	(scroll = function() {
		
		if(mobile != true && $('.header-content').css('position') != 'fixed') {
			var scrollPos = $(document).scrollTop();
			
			if(scrollPos > headerPos) {
				clearTimeout(show);
				init = true;
				if(once === true) {
					once = false;
					$('.header .cover').hide();
					go = setTimeout(function() {
						$('.header .cover').show();
					}, 400);
				}
				
				$('.header-content').addClass('attached').css({'top' : (scrollPos-headerPos)+'px'});
				
			} else if(init === true) {
				
				clearTimeout(go);
				
				$('.header-content').removeClass('attached').css({'top' : '0px'});
				once = true;
				$('.header .cover').hide();
				show = setTimeout(function() {
					$('.header .cover').show();
				}, 400);
				
				init = false;
			}
		}
		
	})();
	
	window.addEventListener('touchstart', function() {
		mobile = true;
	});
	
	(wresize = function() {
		msize = $('.header').width();
		$('.attached').width(msize);
	});
	
	$(document).scroll(scroll);
	$(window).resize(wresize);
	
});*/