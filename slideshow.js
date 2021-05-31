var imageCount = 1;
var total = 5;
var descCount = 1;

var captionImages =["Best Friend","Paris","Donkey","Astronaut","Pug"];

function picture(x) {
	var image = document.getElementById('image');
	imageCount = imageCount + x;
	if(imageCount > total){imageCount = 1;}
	if(imageCount < 1){imageCount = total;}	
	image.src = "img/img"+ imageCount +".jpg";

								
	}
 
setInterval(function pictureA() {  
	var image = document.getElementById('image');
	imageCount = imageCount + 1;
	if(imageCount > total){imageCount = 1;}
	if(imageCount < 1){imageCount = total;}	
	image.src = "img/img"+ imageCount +".jpg";},3000);

function desc(x) {
	var caption = document.getElementById('caption');
	descCount = descCount + x;
	if(descCount > total){descCount = 1;}
	if(descCount < 1){descCount = total;}	
	document.getElementById("caption").innerHTML = captionImages[descCount -1];
								
	}
 
setInterval(function descA() {  
	var caption = document.getElementById('caption');
	descCount = descCount + 1;
	if(descCount > total){descCount = 0;}
	if(descCount < 1){imageCount = total;}	
	document.getElementById("caption").innerHTML = captionImages[descCount -1];},3000);

