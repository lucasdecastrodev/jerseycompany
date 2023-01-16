const containerProdutos = document.querySelector("#produtos");
let carrinhoCliente = [];

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

async function PegaProdutos() {
  let url = "http://localhost:3000/items";
  try {
    let res = await fetch(url);
    const produtosJson = await res.json();
    console.log(produtosJson);
    return produtosJson;
  } catch (error) {
    console.log(error);
  }
}

const listaProdutosViaApi = PegaProdutos();
Promise.all(listaProdutosViaApi).then((res) => console.log(res));
console.log(listaProdutosViaApi);

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
          
          <a value="${prod.id}" class="btn__adicionacarrinho"
            >Adicionar ao carrinho</a
          >`;
  });
}

inicializarLoja();
const barraNav = document.querySelector(".mainnav");

barraNav.addEventListener("click", (e) => {
  aClicado = e.target.id;
  filtraPais(aClicado);
});

function filtraPais(escolhido) {
  containerProdutos.innerHTML = "";
  const filtradoPorPais = items.filter((item) => item.categoria == escolhido);
  inicializarLoja(filtradoPorPais);
}

containerProdutos.addEventListener("click", adicionaAoCarrinho);
