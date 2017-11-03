var images = new Array();
images[0] = "https://static.pexels.com/photos/909/flowers-garden-colorful-colourful.jpg";
images[1] = "http://www.hdwallpapers.in/download/summer_red_flowers-3840x2160.jpg";
images[2] = "https://static.pexels.com/photos/47258/pexels-photo-47258.jpeg";

function e(el){
    return document.getElementById(el);
}

var image = e("images");
var totalImages = images.length;

function imageChange(){
    var slider_start = images[images.length++ % totalImages];
    image.setAttribute("src", slider_start);
}

imageChange();
setInterval(imageChange, 1000);
