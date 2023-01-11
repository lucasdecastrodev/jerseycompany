const items = [
  {
    id: 0,
    nome: "Liverpool home 2022/2023",
    preco: 350.0,
    img: "img/liv-2022-home.png",
    quantidade: 10,
    categoria: "clubes_europa",
  },
  {
    id: 1,
    nome: "Corinthians away 2021/2022",
    preco: 185.0,
    img: "img/cor-2022-away.jpg",
    quantidade: 10,
    categoria: "clubes_brasil",
  },
  {
    id: 2,
    nome: "Palmeiras away 2021/2022",
    preco: 182.0,
    img: "img/pal-2022-away.jpg",
    quantidade: 10,
    categoria: "clubes_brasil",
  },
  {
    id: 3,
    nome: "Flamengo away 2021/2022",
    preco: 190.0,
    img: "img/fla-2022-away.jpg",
    quantidade: 10,
    categoria: "clubes_brasil",
  },
  {
    id: 4,
    nome: "Milan away 2022/2023",
    preco: 320.0,
    img: "img/mil-2022-away.png",
    quantidade: 10,
    categoria: "clubes_europa",
  },
  {
    id: 5,
    nome: "corinthians home 2022/2023",
    preco: 250.0,
    img: "img/cor-2023-home.png",
    quantidade: 10,
    categoria: "clubes_brasil",
  },

  {
    id: 6,
    nome: "Milan home 2022/2023",
    preco: 320.0,
    img: "img/mil-2022-home.png",
    quantidade: 10,
    categoria: "clubes_europa",
  },

  {
    id: 7,
    nome: "Manchester City home 2022/2023",
    preco: 400.0,
    img: "img/cit-2022-home.png",
    quantidade: 10,
    categoria: "clubes_europa",
  },
];

const containerProdutos = document.querySelector("#produtos");

function inicializarLoja(produtos) {
  produtos.map((prod) => {
    containerProdutos.innerHTML += `
    <div class="produto-single">
          <img src="/${prod.img}" />
          <h1>${prod.nome}</h1>
          <p class="preco">R$ ${prod.preco}</p>
          <p class="preco__parcelado">ou 12x de R$${(prod.preco / 12).toFixed(
            1
          )}</p>
          <a key="${prod.id}" href="" class="btn__adicionacarrinho"
            >Adicionar ao carrinho</a
          >`;
  });
}

inicializarLoja(items);
const nav = document.querySelector(".mainnav");

nav.addEventListener("click", (e) => {
  aClicado = e.target.id;
  filtraPais(aClicado);
});

// const linkEuropa = document.querySelector("#filtra__europa");
// const linkBrasil = document.querySelector("#filtra__brasil");
// const linkSelecoes = document.querySelector("#filtra__selecoes");
// const LinkResto = document.querySelector("#filtra__resto");

function filtraPais(escolhido) {
  containerProdutos.innerHTML = "";
  const filtradoPorPais = items.filter((item) => item.categoria == escolhido);
  inicializarLoja(filtradoPorPais);
}

var links = document.querySelectorAll(".btn__adicionacarrinho");

// var carrinhoCliente = [];

// for (var i = 0; i < links.length; i++) {
//   links[i].addEventListener("click", function (e) {
//     e.preventDefault();
//     let chave = this.getAttribute("key");
//     items[chave].QtdCarrinho++;
//     carrinhoCliente.push(items[chave]);

//     atualizarCarrinho();
//   });
// }

function atualizarCarrinho() {
  console.log(carrinhoCliente);
  var containerCarrinho = document.querySelector("#carrinho");
  containerCarrinho += ``;
}
