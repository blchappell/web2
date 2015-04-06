function addImage(image, link, likes, caption){
  var $container = $("div.container");
  var $div = $("<div>").addClass("item");
  
  var $image = $("<img>").attr("src",image);
  var $link = $("<href>").attr("src",link);
  var $likes = $("<h5>").text(subtitle);
  var $caption = $("<p>").text(caption);	

  $div.append($image).append($link).append($likes).append($caption);
  $container.append($div);
}

addImage("http://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s150x150/e15/11055772_1558157594448054_879696703_n.jpg", "https://instagram.com/p/0lOFZ0g8gA/", 720, "منشن الي تبيه يشوف المقطع");
addImage("http://scontent.cdninstagram.com/hphotos-xpa1/t51.2885-15/s150x150/e15/924442_823400811060434_669939277_n.jpg", "https://instagram.com/p/0lR2EBzUie/", 432, "Aquela buzinadinha");     
addImage("http://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s150x150/e15/10919675_944043618953681_1961747465_n.jpg", "https://instagram.com/p/0lTX-pqkcC/", 543, "Сегодня была на прекрасном мероприятии #soundkids");      
addImage("http://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s150x150/e15/11055616_1568588500090432_546823562_n.jpg", "https://instagram.com/p/0lNgG4st5V/", 344, "Are your tubes in good shape?");