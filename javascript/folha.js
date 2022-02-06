let order = [];
let clickedOrder = [];
let score = 0;

/* 0 = verde
   1 = vermelho
   2 = amarelo
   3 = azul */ 
  
const green = document.querySelector('green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');



//cria ordem aleatoria de cores.
let shufflerOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];
    
    for(let i in order) {
        let elementColor = createColorElement(order[1]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende a próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number- 250 )
    setTimeout(() =>{
        element.classList.remove('selected');
    })
}

//Checa se os botões clicados são os mesmos da ordem gerado no jogo.
let checkOrder = () => {
    for(let i in clickedOrder){
        if (clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if (clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando Próximo Nível!`);
        nextLevel();
    }
}

//função para o clique do usuário.
let click = (color) =>{
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    } , 250);
    
}

//função que retorna a cor
let createColorElement = (color) => {
    if (color == 0){
        return green;
    }else if (color == 1){
        return red;
    }else if (color == 2){
        return yellow;
    }else if (color == 3){
        return blue;
    }
}

//função para próximo nível
let nextLevel = () => {
    score ++;
    shufflerOrder();
}

//Função para game over
let gameOver = () => {
    alert(`Pontuação: ${score}!\nGAME OVER! \n Clique em OK para iniciar um novo jogo. `);
    order = [];
    clickedOrder = [];

    playGame();
}

let playGame = () =>{
    alert(`Bem Vindo ao Gênesis! Iniciando novo Jogo!`);
    score = 0;

    nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);
  

playGame();
