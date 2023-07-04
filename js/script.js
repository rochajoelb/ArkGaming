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



function verificarLogin(){
    var utilizador = document.getElementById('user').value;
    var password = document.getElementById('pass').value;

    if(utilizador === ""){
    alert('Por Favor insira o nome de utilizador')
}
 else if(password === ""){
    alert('Por Favor insira a password')
 } 
   
else if(utilizador === "passaro" && password === "user"){
    alert('Registrado com sucesso')
}
else{
    alert('Dados incorretos')
}
}
