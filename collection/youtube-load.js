function addVideo(video){
  
  var title = video.snippet.title;
  var thumbnail =  video.snippet.thumbnails.default.url;

    console.log(title);
    console.log(thumbnail);
    
    var $div= $("<div>").addClass("video");
    var $title= $("<h4>").text(title);
    var $image= $("<img>").attr("src",thumbnail);
    
    $div.append($image).append($title);
	
	$div.on("click", function() {
		showModal(video);
	})
    
    $(".container").append($div);
	

}

function showModal(video) {
   $(".modal").empty();
   
   var title = video.snippet.title;
   var description =  video.snippet.description;

    
     var $div= $("<div>");
	 
     var $title= $("<h4>").text(title);
     var $description= $("<p>").text(description);
	 
	 var iframe=$("iframe").attr("src", "https://www.youtube.com/embed/" + video);
    
     $div.append($title).append($description);
    
     $(".modal").append($div);

   
   $(".overlay").show();
   $(".modal").show();

}

function hideModal() {
  $(".overlay").hide();
  $(".modal").hide();
}
function loadYoutube(videos) {
	for(var i=0; i<videos.items.length; i++){
     addVideo(videos.items[i]);
  }
	showModal(videos.items[0]);
}
