 /*
 $('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});
 
*/
$('.navTrigger').click(function () {
  $(this).toggleClass('active');
  console.log("Clicked menu");
  $("#mainListDiv").toggleClass("show_list");
  
  if ($("#mainListDiv").hasClass("show_list")) {
    $("#mainListDiv").fadeIn();
  } else {
    $("#mainListDiv").fadeOut();
  }
});


