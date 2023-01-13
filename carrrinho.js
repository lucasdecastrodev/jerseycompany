function adicionaAoCarrinho(e) {
  let valueProdutoEscolhido = e.target.getAttribute("value");
  let produtoEscolhido = items.id == valueProdutoEscolhido;

  adicionaAoCarrinho(produtoEscolhido);
}

function adicionaAoCarrinho(produto) {
  carrinhoCliente.push(produto);
  console.log(carrinhoCliente);
  inicializarCarrinho(carrinhoCliente);
}

function inicializarCarrinho(produtos) {
  produtos.map((prod) => {
    carrinhoCliente.innerHTML += `
      <div class="produto-single">
            <img src="/${prod.img}" />
            <h1>${prod.nome}</h1>
            <p class="preco">R$ ${prod.preco}</p>
            <p class="preco__parcelado">ou 12x de R$${(prod.preco / 12).toFixed(
              1
            )}</p>`;
  });
}
