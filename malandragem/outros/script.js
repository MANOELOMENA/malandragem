var numCliques = 0;
var frases = [
    "Tem certeza?",
    "Por que não?",
    "Diz sim por favor, eu demorei pra fazer isso :(",
    "Aperta no sim vida, por favor!",
    "Você vai se arrepender!",
    "Pense bem...",
    "Não é tarde pra você aperta no sim.",
    "Eu vou chorar!",
    "Diz sim mísera",
    "A palavra sim não existe no seu dicionário? " 
]

function responder(resposta) {
    if (resposta === 'sim') {
        window.open('./img/sim.png');
    } else if (resposta === 'nao') {
        numCliques++;
        if (numCliques === 10) {
            window.open('./video/iae.mp4');
        } else {
            var buttonNao = document.getElementById('nao');
            var randomX = Math.random() * (window.innerWidth - buttonNao.offsetWidth);
            var randomY = Math.random() * (window.innerHeight - buttonNao.offsetHeight);
            buttonNao.style.left = randomX + 'px';
            buttonNao.style.top = randomY + 'px';
            var randomIndex = Math.floor(Math.random() * frases.length);
            document.getElementById('pergunta').innerText = frases[randomIndex];
        }
    }
}
