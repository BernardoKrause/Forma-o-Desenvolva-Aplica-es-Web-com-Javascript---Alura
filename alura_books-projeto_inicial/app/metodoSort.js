let btnOrdernarPorPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdernarPorPreco.addEventListener('click', ordenarLivrosPorPreco);

function ordenarLivrosPorPreco() {
    let livrosOrdenados = livros.sort((a,b) => a.preco - b.preco);
    exibirOsLivrosNaTela(livrosOrdenados)
}