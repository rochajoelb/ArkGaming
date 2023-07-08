function atualizaPreco(preco){
    let imput = parseInt(document.getElementById("quantidade").value);
    let resultado = preco * imput;
    document.getElementById('precoFinal').innerHTML = (resultado.toFixed(2) + " €");
}



