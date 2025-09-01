
function pesquisar() {
    var linkpesquisa = "https://pokeapi.co/api/v2/pokemon/"
    texto = String(document.getElementById('texto').value)
    window.alert(texto)
    linkpesquisa = linkpesquisa + texto
    window.alert(linkpesquisa)
try {
    async function getData() {
  const response = await fetch(linkpesquisa);
  const data = await response.json();
  console.log(data);
  return data;
}

let variavelJson;
getData().then(result => {
  variavelJson = result;
  console.log("Guardado na variável:", variavelJson);
});

getData().then(ditto => {
  console.log("Nome do pokémon:", ditto.name);
});}catch(error){}
}




