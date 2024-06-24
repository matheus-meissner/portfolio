const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)')

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

function adjustAsideClass() {
    const asideElement = document.getElementById('aside');
    const minWidth = 769;
    const maxWidth = 1023;
    const currentWidth = window.innerWidth;

    if (currentWidth >= minWidth && currentWidth <= maxWidth) {
        asideElement.classList.remove('col-md-2');
    } else {
        // Adiciona a classe de volta caso a largura não esteja no intervalo especificado
        asideElement.classList.add('col-md-2');
    }
}

// Executa a função ao carregar a página
window.addEventListener('load', adjustAsideClass);

// Executa a função ao redimensionar a janela
window.addEventListener('resize', adjustAsideClass);
