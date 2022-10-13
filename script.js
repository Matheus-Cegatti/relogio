const ponteiroHora = document.querySelector(".ponteiro.horas");
const ponteiroMinutos = document.querySelector(".ponteiro.minutos");
const ponteiroSegundos = document.querySelector(".ponteiro.segundos");

const rotacaoDoPonteiro = (e, porcentagemRotacao) => {
    e.style.setProperty('--rotation', porcentagemRotacao * 360);
}

const definindoRelogio = () => {
    const dataAtual = new Date();

    const segundosPorcentagem = dataAtual.getSeconds() / 60;
    const minutosPorcentagem = dataAtual.getMinutes() / 60;
    const horasPorcentagem = dataAtual.getHours() / 12;

    rotacaoDoPonteiro(ponteiroSegundos, segundosPorcentagem);
    rotacaoDoPonteiro(ponteiroMinutos, minutosPorcentagem);
    rotacaoDoPonteiro(ponteiroHora, horasPorcentagem);

}

