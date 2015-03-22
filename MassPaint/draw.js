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

$("#button-black").on("click",function() {
	$(this).addClass("selected");
	tool = "black";
	lineColor("black");
	lineWidth(width);
})

$("#button-sand").on("click",function() {
	$(this).addClass("selected");
	tool = "sand";
	lineColor("#e8dfda");
	lineWidth(width);
})

$("#button-sanddark").on("click",function() {
	$(this).addClass("selected");
	tool = "sanddark";
	lineColor("#bcb2b3");
	lineWidth(width);
})

$("#button-water").on("click",function() {
	$(this).addClass("selected");
	tool = "water";
	lineColor("#62bccc");
	lineWidth(width);
})

$("#button-waterdark").on("click",function() {
	$(this).addClass("selected");
	tool = "waterdark";
	lineColor("#187789");
	lineWidth(width);
})

$("#button-sky").on("click",function() {
	$(this).addClass("selected");
	tool = "sky";
	lineColor("#cad1e4");
	lineWidth(width);
})

$("#button-whale").on("click",function() {
	$(this).addClass("selected");
	tool = "whale";
	lineColor("#7483aa");
	lineWidth(width);
})

$("#button-green").on("click",function() {
	$(this).addClass("selected");
	tool = "green";
	lineColor("#7e9f33");
	lineWidth(width);
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

$(document).on("mousedown",function(e) {
	e.preventDefault();						 //whatever the browser was going to do before this, don't do it
  moveTo(e.pageX,e.pageY);
  if(tool == "pen" || tool == "eraser" || tool == "brush1" ||  tool == "brush2" || tool == "black" || tool == "sand" || tool == "sanddark" || tool == "water" || tool == "waterdark" || tool == "green" || tool == "sky" || tool == "whale") { 
    drawing = true;
  } else if (tool == "star") {
	  star();
  } else if (tool == "pent"){
	  pent();
  }
});

$(document).on("mousemove",function(e) {
  e.preventDefault();
  if(drawing) {
    lineTo(e.pageX,e.pageY);
  }
});

$(document).on("mouseup",function(e) {
  e.preventDefault();
  drawing = false;
});





