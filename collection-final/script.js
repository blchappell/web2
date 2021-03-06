

// ADD IN DETAIL VIEW

function showModal(item) {
   $(".modal").empty();
	// anything with a class of 'modal', clear out anything inside of it
   
   var $h1 = $("<h1>").text(item.Neighborhood);
   var $h4 = $("<h4>").text(item.Latitude + ", " + item.Longitude);
   var $img = $("<img>").attr("src",item.Image);
   var $p = $("<p class='distance'>").text("Distance from hail port: " + item.Distance);
   var $p2 = $("<p class='description'>").text(item.Description);

   $(".modal").append($h1,$h4,$img,$p,$p2);
   
   $(".overlay").show();
   $(".modal").show();
}
	// anytime the function 'showModal' is called, depending on whatever item is targeted, add an overlay and a modal on top of the screen, and add the content from the spreadsheet to the detail view

function hideModal() {
  $(".overlay").hide();
  $(".modal").hide();
}
	// anytime the function 'hideModal' is called, hide anything with the classes of 'overlay' and 'modal'



// DRAW LIST VIEW

function addItem(item) {
  var $li = $("<li>").addClass("item").addClass(item.Neighborhood);
console.log(item);
	/* creates an empty 'li' with:
	 		- a class of "item" 
			- goes into the column 'Color' and adds a class for that value 
	*/

  $li.attr("data-category",item.Neighborhood);
	// add an attribute to the HTML for 'data-category' and set the value to whatever that color is in the spreadsheet

  var $h2 = $("<h2 class='name'>").text(item.Neighborhood);
  var $p = $("<p class='description'>").text("lat "+ item.Latitude + ", " + "long "+  item.Longitude);
  //var $p = $("<p class='description'>").text("Distance from hail port: " + item.Distance);
	// add an 'h2' and a 'p' inside the 'li' and set the values to whatever was in the speadsheet under those columns

  $li.append($h2).append($p);
	// put it on the page 

  $li.on("click",function(e) {
      showModal(item);
  });
	// when the user clicks on a 'li' element, show the modal that you styled

  $(".collection").append($li);
};
	// any 'li' element that has a class of 'collection,' put it on the page

function addItems(data) {
  for(var i=0;i<data.length;i++) {
    addItem(data[i]);
  }
}
	// loop the fuction 'addItems' however many times the length (rows) of your spreadsheet is



function callback(data) { 

  addItems(data);
	// call the function 'addItems' and set the parameters to your 'data'

  var $container = $('.collection');
  $container.packery({
    itemSelector: '.item',
    gutter: 10
  });
	// anything with a class of 'collection', refer to the Packery library...

  var myCollection = $(".item").collection({
    filters: { 
      "title": "h2",
      "category": "[data-category]"
    },
	// add filters to the page for 'title' and 'category'

    update: function() { 
      $container.packery(); 
      setTimeout(function() { $container.packery()},600);
    },
    hide: function($elem) { $elem.hide(); },
    show: function($elem) { $elem.fadeIn(500); },
  });
	// add a transition to the '$container' variable

  $(".category").on("click",function(e) {
      var category = $(this).data("category");
      $("#filter-bar button").removeClass("selected");
      $(this).addClass("selected");
      myCollection.filtered("category",category);
  });
	/* when you click something that has a class of 'category', 
			- call the data that fits that category
			- remove the class 'selected from anything with an id of 'filter-bar and a button element
			- add a class of 'selected' to anything with a clss of 'category'
			- 
	*/

  $("#search").on("change keyup",function(e) {
      myCollection.filtered("title", $(this).val());
  });
	// when your typing inside anything with an id of 'search', start filtering the 'title' categories

  $(".overlay").on("click",function(e) {
      hideModal();
  });
	// when you click anything with a class of 'overlay', perform the function that hides the modal

}

// Extracts the data from a Google Spreadsheet
  Tabletop.init( { key: "https://docs.google.com/spreadsheets/d/1zSAgOFI9GU07DjkrOBVprBDlfRWtedhS_E9iTwH1fPs/pubhtml",
                   callback: callback,
                   simpleSheet: true } )
