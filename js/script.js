 $('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});
 
// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

/*--------------------------------------------------------------------*/
/*
function transform1(){
  document.getElementById('img1').style.transform = 'scale(0)'
  document.getElementById('img2').style.transform = 'scale(1)'
}

function transform2(){
  document.getElementById('img2').style.transform = 'scale(0)'
  document.getElementById('img1').style.transform = 'scale(1)'
}

function transformBody(){
  document.getElementById('img2').style.transform = 'scale(1)'
  document.getElementById('img1').style.transform = 'scale(1)'
}
*/