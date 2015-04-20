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

$("h3, h4, .about").on("arriving",function(e) {
  $(this).addClass("on-page");
});

$(".iframe-cover, #bg-3, .ch1-cover").on("arriving",function(e) {
	$(this).addClass("appeared");
});

$(".ch1-cover").on("arrived",function(e) {
	$(this).addClass("transition");
});

$(".arrow-scroll").on("departing",function(e){
    $(this).removeClass("on-page");
	$(this).addClass("leave-page");
});


// SCALE STATS
/*
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


*/