/*
- Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html;

Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele;

Passo 2 - identificar o clique no botão;

Passo 3 - adicionar a classe ativo nos projetos escondidos;

- Objetivo 2 - esconder o botão de mostrar mais;

Passo 1 - pegar o botão e esconder ele *;
*/

/*
var escondidos = document.getElementsByClassName('projeto');
var btn = document.getElementById('btn');
var mostrarMenos = 'Mostrar Menos';
var mostrarMais = 'Mostrar Mais';

btn.addEventListener('click', function(){
    if (btn.innerText !== mostrarMenos) {
        mostraEscondidos(escondidos);
        trocaNomeBotaoPraMenos(btn);
    } else {
        escondeMostrados(escondidos);
        trocaNomeBotaoPraMais(btn);
    }
})

function mostraEscondidos(elementos) {
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.display = 'block';
        elementos[i].classList.add('mostrado');
    }
}

function escondeMostrados(elementos) {
    var mostrados = document.getElementsByClassName('mostrado');
    for (var i = 0; i < mostrados.length; i++) {
        mostrados[i].style.display = 'none';
    }
}

function trocaNomeBotaoPraMenos(btn) {
    btn.innerText = mostrarMenos;
}

function trocaNomeBotaoPraMais(btn) {
    btn.innerText = mostrarMais;
}

*/

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');


botaoMostrarProjetos.addEventListener('click', () => {

})