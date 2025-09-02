let produtos = [
    {
        id: 1,
        nome: "iPhone 15 Pro",
        categoria: "smartphones",
        preco: 7999,
        precoOriginal: 8999,
        imagem: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400",
        descricao: "Smartphone Apple com câmera avançada"
    },
    {
        id: 2,
        nome: "MacBook Air M2",
        categoria: "laptops",
        preco: 8999,
        precoOriginal: 10999,
        imagem: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
        descricao: "Notebook Apple ultrafino e potente"
    },
    {
        id: 3,
        nome: "AirPods Pro",
        categoria: "headphones",
        preco: 1899,
        precoOriginal: 2299,
        imagem: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400",
        descricao: "Fones sem fio com cancelamento de ruído"
    },
    {
        id: 4,
        nome: "Samsung Galaxy S24",
        categoria: "smartphones",
        preco: 5499,
        precoOriginal: 6299,
        imagem: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400",
        descricao: "Smartphone Samsung com tela AMOLED"
    },
    {
        id: 5,
        nome: "Apple Watch Series 9",
        categoria: "smartwatch",
        preco: 3299,
        precoOriginal: 3799,
        imagem: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400",
        descricao: "Relógio inteligente com monitoramento"
    },
    {
        id: 6,
        nome: "Teclado Mecânico",
        categoria: "accessories",
        preco: 499,
        precoOriginal: 799,
        imagem: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
        descricao: "Teclado mecânico RGB para gamers"
    },
    {
        id: 7,
        nome: "Sony WH-1000XM5",
        categoria: "headphones",
        preco: 2499,
        precoOriginal: 2999,
        imagem: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400",
        descricao: "Fone com cancelamento de ruído"
    },
    {
        id: 8,
        nome: "Dell XPS 13",
        categoria: "laptops",
        preco: 7999,
        precoOriginal: 8999,
        imagem: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400",
        descricao: "Notebook Windows premium"
    }
];

let boxProdutos = document.querySelector(".produtos-box");
let inputPesquisa = document.querySelector(".input-pesquisa");
let textoInput = ""
let todosBotoes = document.querySelectorAll(".botao-categorias");
console.log(todosBotoes);
let categoria = "todos"

function mostrarProdutos() {
    let htmlProdutos = ""

    produtos.forEach(prd => {

        if (prd.nome.toLowerCase().includes(textoInput.toLowerCase())) {

            if (prd.categoria === categoria || categoria === "todos") {

                htmlProdutos += `
            <div class="cartao-produto">
                <img src="${prd.imagem}" class="imagem-produto">
                <div class="info-produto">
                    <h3 class="nome-produto">${prd.nome}</h3>
                    <p class="descricao-produto">${prd.descricao}</p>
                    <p class="preco-produto">R$ ${prd.preco}</p>
                    <button class="botao-produto">Ver Detalhes</button>
                </div>
            </div>
        `
            }
        }
    })

    boxProdutos.innerHTML = htmlProdutos

}

mostrarProdutos()

function pesquisar() {
    textoInput = inputPesquisa.value

    mostrarProdutos()
}

inputPesquisa.addEventListener("input", pesquisar)

todosBotoes.forEach(botao => {

    botao.addEventListener("click", function () {
        console.log("Botão clicado", botao.getAttribute("data-categoria"));
        categoria = botao.getAttribute("data-categoria")

        todosBotoes.forEach(b => b.classList.remove("ativo"))
        botao.classList.add("ativo")

        mostrarProdutos()
    })
})
