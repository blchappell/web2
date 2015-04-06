speed(0);
record();
reset();
hide();

$("#button-save").on("click",function() {
 downloadRecording();
});

$("#button-replay").on("click",function() {
 replay();
});

$("#button-pen").on("click",function() {
	$(".tool").removeClass("selected");
	$(this).addClass("selected");
	tool = "pen";
	width = lineWidth(1);
	lineColor(color);
})

$("#button-eraser").on("click",function() {
	$(".tool").removeClass("selected");
	$(this).addClass("selected");
	tool = "eraser";
	lineWidth(30);
	lineColor("white");
})

$("#button-pent").on("click",function() {
 $(".tool.selected").removeClass("selected");
 $(this).addClass("selected");
 tool = "pent";
 lineWidth(2);
 lineColor(color);
});

$("#button-star").on("click",function() {
 $(".tool.selected").removeClass("selected");
 $(this).addClass("selected");
 tool = "star";
 lineWidth(2);
 lineColor(color);
});

$("#button-brush1").on("click",function() {
	$(".tool").removeClass("selected");
	$(this).addClass("selected");
	tool = "brush1";
	width = lineWidth(20);
})

$("#button-brush2").on("click",function() {
	$(".tool").removeClass("selected");
	$(this).addClass("selected");
	tool = "brush2";
	width = lineWidth(50);
})



$(".color").on("click",function(e) {
	var col = $(this).data("color");
	color = col;
	tool = "color";
})


function pent() {
	for(var i = 0; i< 20; i++) {	
  	angle(55);
	move(10,0);
  	forward(size);
  	rotate(72);
  	forward(size);
  	rotate(72);
  	forward(size);
  	rotate(72);
  	forward(size);
 	 rotate(72);
  	forward(size);
	}
} 

function star(){
  forward(size);
  rotate(120);
  forward(size);
  rotate(120);
  forward(size+size);
  rotate(120);
  forward(size);
  rotate(120);
  forward(size + size);
  rotate(120);
  forward(size);
  rotate(120);
  forward(size);
}

var drawing = false;
var tool = "pen";
var size = 25;
var width = 1;
var color = "black";

$("canvas").on("mousedown",function(e) {
	e.preventDefault();						 //whatever the browser was going to do before this, don't do it
  moveTo(e.pageX,e.pageY);
  if(tool == "pen" || tool == "eraser" || tool == "brush1" ||  tool == "brush2" || tool == "color") { 
    drawing = true;
  } else if (tool == "star") {
	  star();
  } else if (tool == "pent"){
	  pent();
  }
});

$("canvas").on("mousemove",function(e) {
  e.preventDefault();
  if(drawing) {
    lineTo(e.pageX,e.pageY);
  }
});

$("canvas").on("mouseup",function(e) {
  e.preventDefault();
  drawing = false;
});





