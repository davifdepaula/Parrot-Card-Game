let numberCards = Number(prompt("Digite a quantidade de cartas que deseja jogar: "))
let plays = 0, seconds = 0
const timer = document.querySelector('.timer span');

while (true){
    if (numberCards % 2 === 0 ){
        if (numberCards >= 4 && numberCards <= 14){
            break
        }
        else{
            numberCards = Number(prompt("Digite a quantidade de cartas que deseja jogar: "));
        }
    }else{
        numberCards = Number(prompt("Digite a quantidade de cartas que deseja jogar: "));
    }
}


let moves = 0;
const frontCard0 =
    '<div class= "front face hideCard"> <img src = "./imagens/bobrossparrot.gif" alt = "bob" /> </div>';
const frontCard1 =
    '<div class="front face hideCard"> <img src = "./imagens/explodyparrot.gif" alt = "explody" /> </div>';
const frontCard2 =
    '<div class="front face hideCard"><img src = "./imagens/fiestaparrot.gif" alt = "fiesta"  /> </div>';
const frontCard3 =
    '<div class="front face hideCard"><img src = "./imagens/metalparrot.gif" alt = "metal" /> </div>';
const frontCard4 =
    '<div class="front face hideCard"><img src = "./imagens/revertitparrot.gif" alt = "revert" /> </div>';
const frontCard5 =
    '<div class="front face hideCard"><img src = "./imagens/tripletsparrot.gif" alt = "triple" /> </div>';
const frontCard6 =
    '<div class="front face hideCard"><img src = "./imagens/unicornparrot.gif" alt = "unicorn" /> </div>';

const cards = [
    frontCard0,
    frontCard1,
    frontCard2,
    frontCard3,
    frontCard4,
    frontCard5,
    frontCard6,
];
const backCards = '<div class="back face"><img src = "./imagens/back.png" alt = "back" /> </div>'
const frontCards = [], isInfront = [];

let firstCard = ""
let secondCard = ""



function startGame() {
    creatFrontCards(numberCards);
    showCards(backCards, frontCards);
}


function creatFrontCards(numberCards) {
    const arr = [];

    while (arr.length < Math.floor(numberCards / 2)) {
        let j = Math.floor(Math.random() * cards.length);
        if (!arr.includes(j)) {
        arr.push(j);
        }
    }

    while (frontCards.length < numberCards) {
        j = Math.floor(Math.random() * arr.length);
        if (frontCards.includes(arr[j])) {
        frontCards.push(arr[j]);
        arr.splice(j, 1);
        } else {
        frontCards.push(arr[j]);
        }
    }

    for (let i = 0; i < frontCards.length; i++) {
        frontCards[i] = cards[frontCards[i]];
    }
    }

function showCards(backCards, frontCards) {
    const content = document.querySelector("main .grid");
    for (let i = 0; i < numberCards; i++) {
        content.innerHTML += `<div class='card' onclick = "showFront(this)"> ${frontCards[i]} ${backCards} </div>`;
    }
}

function hideCard(element){
    const front = element
    const parent = element.parentNode
    const back = parent.querySelector(".card .back")
    setTimeout(() => {
        back.classList.remove("hideCard")
        front.classList.add("hideCard")
        setTimeout(() => {
            firstCard = ""
            secondCard = ""
        }, 100)
    }, 1000)
}

function endGame(){
    if(isInfront.length === numberCards/2){
        setTimeout(() => {
            alert(`Você ganhou em ${plays} jogadas em um tempo de ${timer.innerHTML} segundos!`)
            clearInterval(this.loop)
        }, 100)
    }
    return true
}


function secondClick() {
    const firstImg = firstCard.getElementsByTagName('img')[0].alt
    const secondImg = secondCard.getElementsByTagName('img')[0].alt
    if (firstImg === secondImg) {
        isInfront.push(firstImg)
        setTimeout(() => {
            firstCard = ""
            secondCard = ""
        }, 100)

        endGame()
    }
    else {
        hideCard(firstCard)
        hideCard(secondCard)
    }

}

function showFront(element) {
    plays++
    const front = element.querySelector(".card .front")
    const back = element.querySelector(".card .back")
    if (element.classList.contains("hideCard")){
        return
    }
    if (firstCard === ""){
        front.classList.remove("hideCard")
        back.classList.add("hideCard")
        firstCard = front
    }

    else if (secondCard === ""){
        front.classList.remove("hideCard")
        back.classList.add("hideCard")
        secondCard = front
    }

    if (firstCard !== "" &&  secondCard !== ""){
        secondClick(firstCard, secondCard)
    }

}

const startTimer = () => {
    this.loop = setInterval(() => {
        const currentTime = Number(timer.innerHTML);
        timer.innerHTML = currentTime + 1;
    }, 1000);
}

window.onload = () => {
    startTimer();
    startGame();

}
