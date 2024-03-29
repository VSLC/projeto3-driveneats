let prato;
let bebida;
let sobremesa;

let pratoPreco;
let bebidaPreco;
let sobremesaPreco;

function selecionaPrato(e) {
  prato = e.querySelector(".nomePrato").innerHTML;
  pratoPreco = e.querySelector(".preco").innerHTML;
  pratoPreco = tratarValor(pratoPreco);
  console.log(typeof pratoPreco);
  console.log(pratoPreco);

  let pratoSelecionado = document.querySelector(".prato-scroll .selecionado");
  console.log(pratoSelecionado);
  if (pratoSelecionado !== null) {
    pratoSelecionado.classList.remove("selecionado");
  }
  console.log(prato);
  console.log(pratoPreco);
  e.classList.add("selecionado");
  verificaSelecionado();
}

function selecionaBebida(e) {
  bebida = e.querySelector(".nomeBebida").innerHTML;
  bebidaPreco = e.querySelector(".preco").innerHTML;
  bebidaPreco = tratarValor(bebidaPreco);
  console.log(bebida);
  console.log(bebidaPreco);

  let bebidaSelecionada = document.querySelector(".bebida-scroll .selecionado");
  if (bebidaSelecionada !== null) {
    bebidaSelecionada.classList.remove("selecionado");
  }
  e.classList.add("selecionado");
  verificaSelecionado();
}

function selecionaSobremesa(e) {
  sobremesa = e.querySelector(".nomeSobremesa").innerHTML;
  sobremesaPreco = e.querySelector(".preco").innerHTML;
  sobremesaPreco = tratarValor(sobremesaPreco);
  console.log(sobremesa);
  console.log(sobremesaPreco);

  let sobremesaSelecionada = document.querySelector(
    ".pudim-scroll .selecionado"
  );
  if (sobremesaSelecionada !== null) {
    sobremesaSelecionada.classList.remove("selecionado");
  }
  e.classList.add("selecionado");

  verificaSelecionado();
}

function verificaSelecionado() {
  if (prato !== undefined && bebida !== undefined && sobremesa !== undefined) {
    const botaoPedido = document.querySelector(".botao");
    botaoPedido.classList.add("habilitado");
    botaoPedido.innerHTML = "fechar pedido";
  }
}

function tratarValor(valor) {
  valor = valor.replace("R$ ", "").replace(",", ".");
  valor = Number(valor);
  return valor;
}

function somaValor() {
  let valorTotal = sobremesaPreco + bebidaPreco + pratoPreco;
  return valorTotal;
}

function mostrarMensagem() {
  if (prato !== undefined && bebida !== undefined && sobremesa !== undefined) {
    let nome = prompt("Qual seu nome :");
    let endereco = prompt("Qual seu endereço: ");

    let mensagem = `
    Olá, gostaria de fazer o pedido:
    - Prato: ${prato}
    - Bebida: ${bebida}
    - Sobremesa: ${sobremesa}
    Total: R$ ${somaValor().toFixed(2)}
    
    Nome: ${nome}
    Endereço: ${endereco}`;

    console.log(mensagem);
    const linkWhatsapp = `https://wa.me/5531975834488?text=${encodeURIComponent(
      mensagem
    )}`;
    window.open(linkWhatsapp);
  }
}
