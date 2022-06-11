let prato;
let bebida;
let sobremesa;

let precoPrato;
let precoBebida;
let precoSobremesa;

function selecionaPrato(e) {
  precoPrato = document.querySelector(".preco").innerHTML;
  precoPrato = trataPreco(precoPrato);
  prato = document.querySelector(".nomePrato").innerHTML;
  console.log(prato);

  let pratoSelecionado = document.querySelector(".selecionado");
  console.log(pratoSelecionado);
  if (pratoSelecionado !== null) {
    pratoSelecionado.classList.toggle("selecionado");
  }
  e.classList.toggle("selecionado");
}

function trataPreco(v) {
  v = v.replace("R$ ", "").replace(",", ".");
  v = Number(v);
  return v;
}
