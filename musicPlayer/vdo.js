function init() {
  document._video = document.getElementById("video");
}
document.addEventListener("DOMContentLoaded", init, false);

//switching videos (playlist)
var videos = 
[
[
"http://media.w3.org/2010/05/sintel/poster.png",
"http://media.w3.org/2010/05/sintel/trailer.mp4",
"http://media.w3.org/2010/05/sintel/trailer.webm"
],
[
"http://media.w3.org/2010/05/bunny/poster.png",
"http://media.w3.org/2010/05/bunny/trailer.mp4"
],
[
"http://media.w3.org/2010/05/bunny/poster.png",
"http://media.w3.org/2010/05/bunny/movie.mp4"
],
[
"http://media.w3.org/2010/05/video/poster.png",
"http://media.w3.org/2010/05/video/movie_300.mp4",
"http://media.w3.org/2010/05/video/movie_300.webm"
]
];
function switchVideo(n) {
if (n >= videos.length) n = 0;

var mp4 = document.getElementById("mp4");
var parent = mp4.parentNode;

document._video.setAttribute("poster", videos[n][0]);
mp4.setAttribute("src", videos[n][1]);
document._video.load();
}
/*An example of all the options of the media API in HTML5
More info here: http://www.w3.org/2010/05/video/mediaevents.html

Buttons styled with RGBA, more info here:
https://zurb.com/article/266/super-awesome-buttons-with-css3-and-rgba
*/




