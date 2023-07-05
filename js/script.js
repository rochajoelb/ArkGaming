 /*******************controla o botao da navbar*************************** */
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

/************************verificar login*********************** */

function verificarLogin() {
  var utilizador = document.getElementById("user").value;
  var password = document.getElementById("pass").value;

  if (utilizador === "") {
    alert("Por Favor insira o nome de utilizador");
  } else if (password === "") {
    alert("Por Favor insira a password");
  } else if (utilizador === "passaro" && password === "user") {
    alert("Login com sucesso");
    window.location.replace("landing.html")
  } else {
    alert("Dados incorretos");
  }
}


/*****************Guardar os emails em ficheiro json para posteriormente enviar para backend*********** */

function guardaEmail(){
  
  let checkBox = document.getElementById('checkbox');
  
  if(checkBox.checked){
    const guardarEmail = document.getElementById("emailInput").value;
    if(guardaEmail !== ""){
      fetch("http://localhost:4000/store-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: guardarEmail}),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
      alert("Email adicionado a nossa lista");
    }else{
      alert("Email não pode estar vazio!")
    } 
  }else{
    alert("Tem de tomar conhecimento da politica de dados pessoais!")
  }
}










