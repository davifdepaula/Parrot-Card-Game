const backCards = []
let moves = 0;

const frontCard0 = '<img src = "./imagens/bobrossparrot.gif" alt = "front" />'
const frontCard1 = '<img src = "./imagens/explodyparrot.gif" alt = "front" />'
const frontCard2 = '<img src = "./imagens/fiestaparrot.gif" alt = "front" />'
const frontCard3 = '<img src = "./imagens/metalparrot.gif" alt = "front" />'
const frontCard4 = '<img src = "./imagens/revertitparrot.gif" alt = "front" />'
const frontCard5 = '<img src = "./imagens/tripletsparrot.gif" alt = "front" />'
const frontCard6 = '<img src = "./imagens/unicornparrot.gif" alt = "front" />'

const frontCards = [frontCard0, frontCard1, frontCard2, frontCard3, frontCard4, frontCard5, frontCard6]

function startGame(){
    cardQuantity = 4
    const contente = document.querySelector(".main ul")
    console.log(contente)
    for(let i = 0; i < cardQuantity ; i++){
        backCards.push('<li class="card" onclick = "showFront()"><img src = "./imagens/back.png" alt = "back" /> </li>')
    }

    for (i = 0; i < cardQuantity; i++) {
        contente.innerHTML += backCards[i]
    }
}

function showFront() {
    console.log("virei")
}

startGame()

