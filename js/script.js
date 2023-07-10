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
      fetch("http://localhost:3000/store-email", {
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

/****************************funções para controlar o carrinho de compras********************************** */

//A primeira versão utilizava o server em node js para recolher os artigos para um ficheiro json e posteriormente enviar para localstorage
//Esta é a segunda versão fazendo a atualização diretamente no localstorage que permite a remoçao e dos artigos no carrinho

function adicionarAoCarrinho(nome, preco) {
  var prod = {};
  if (nome !== "" && preco !== "") {
    prod = { nome: nome, preco: preco };
  }
  
  var produtos = [];
  var produtosLocalStorage = window.localStorage.getItem("produtos"); //busca o json file que já esta em localstorage

  if (produtosLocalStorage !== null) {
    produtos = JSON.parse(produtosLocalStorage); //faz o parse para a lista
  }
  try{
    produtos.push(prod); //incrementa a lista com o novo produto 
    window.localStorage.setItem("produtos", JSON.stringify(produtos)); //envia a lista para localstorage novamente
    alert("Produto adicionado ao carrinho");
  }catch{
    alert("Algo correu mal! Não foi possivel adicionar o produto!")
  }
}


function carrinho() {
  const produtos = JSON.parse(window.localStorage.getItem("produtos"));

  let carrinhoTableBody = document.querySelector("#carrinhoTable tbody");
  let total = 0;

  for (var i = 0; i < produtos.length; i++) {
    var produto = produtos[i];

    var novaLinha = document.createElement("tr");
    novaLinha.innerHTML = `
      <td>${produto.nome}</td>
      <td>${produto.preco}€</td>
      <td><input id="qtd" type="number" value="1"></td>
      <td><button class="item" onclick="removerItem(this)">Remover</td>
    `;
    carrinhoTableBody.appendChild(novaLinha);
    total += parseFloat(produto.preco);
  }
  
  var campoTotal = document.querySelector("#campoTotal");
  campoTotal.innerHTML = ` ${total.toFixed(2)}`;
}


function limparCarrinho() {
  localStorage.removeItem("produtos");
  var carrinhoTableBody = document.querySelector("#carrinhoTable tbody");
  carrinhoTableBody.innerHTML = "";
  var total = document.querySelector("#campoTotal");
  total.innerHTML = "";

  alert("Obrigado pela sua compra!");
}


//funcçao incompleta nao estou a conseguir atualizar o 
//total depois de remover um artigo sem recarregar a pagina manualmente

function removerItem(){
  var artigo = document.querySelector('.item');
  var produtosLocalStorage = localStorage.getItem("produtos");
  
  var removeProduto = artigo.parentNode.parentNode;
  removeProduto.parentNode.removeChild(removeProduto);
  
  if (produtosLocalStorage !== null){
    var produtos = JSON.parse(produtosLocalStorage);
    produtos.splice(artigo,1);
    localStorage.setItem("produtos", JSON.stringify(produtos));
  }
  
  var campoTotal = document.querySelector("#campoTotal");
  var totalAtual = parseFloat(campoTotal);
  var precoRemovido = parseFloat(produtosLocalStorage[artigo].preco); 
  
  campoTotal.textContent = ` ${(totalAtual - precoRemovido).toFixed(2)}`;
}





