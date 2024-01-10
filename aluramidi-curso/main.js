
/*document.querySelector('.tecla_pom').addEventListener('click', function () {
    document.querySelector("#som_tecla_pom").play()
}); */

function tocaSom(seletorAudio) {
    /*var som = seletorAudio.target.classList[1];
    document.querySelector(`#som_${som}`).play();*/
    const element = document.querySelector(seletorAudio);

    if (element && element.localName === 'audio') {
        element.play();
    } else {
        console.log('Elemento não encontrado ou seletor inválido');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i];
    tecla.onclick = function () {
        tocaSom(`#som_${tecla.classList[1]}`)
    };

    tecla.onkeydown = function (e) {

        if(e.code === 'Space' || e.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}