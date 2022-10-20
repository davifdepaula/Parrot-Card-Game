let moves = 0
const frontCard0 = '<img src = "./imagens/bobrossparrot.gif" alt = "front" />'
const frontCard1 = '<img src = "./imagens/explodyparrot.gif" alt = "front" />'
const frontCard2 = '<img src = "./imagens/fiestaparrot.gif" alt = "front" />'
const frontCard3 = '<img src = "./imagens/metalparrot.gif" alt = "front" />'
const frontCard4 = '<img src = "./imagens/revertitparrot.gif" alt = "front" />'
const frontCard5 = '<img src = "./imagens/tripletsparrot.gif" alt = "front" />'
const frontCard6 = '<img src = "./imagens/unicornparrot.gif" alt = "front" />'

const cards = [frontCard0, frontCard1, frontCard2, frontCard3, frontCard4, frontCard5, frontCard6]
const backCards = [] 
const frontCards = []
const isInFront = []

function startGame(){
    let j = 0
    quantity = 4
    creatBackCards(quantity)
    creatFrontCards(quantity)
}

function creatBackCards(quantity){
    const contente = document.querySelector(".main ul")
    for(let i = 0; i < quantity ; i++){
        backCards.push('<li class="card" onclick = "showFront(this)"><img src = "./imagens/back.png" alt = "back" /> </li>')
    }

    for (i = 0; i < quantity; i++) {
        contente.innerHTML += backCards[i]
    }
}

function creatFrontCards(quantity){
    const arr = []
    console.log(Math.floor(quantity/2))

    while(arr.length < Math.floor(quantity/2)) {
        let j = Math.floor(Math.random() * cards.length)
        if(!arr.includes(j)){
            arr.push(j)
        }
    }

    while (frontCards.length < quantity){
        j = Math.floor(Math.random() * arr.length)
        if (frontCards.includes(arr[j])){
            frontCards.push(arr[j])
            arr.splice(j, 1)
        }
        else {
            frontCards.push(arr[j])
        }
    }
    console.log(frontCards)
    
}



function showFront(element) {
    moves++
    if(isInFront.includes(element)){
        frontCards.pop(frontCards.indexOf(element))
    }
    else{
        console.log("virei de costas")
    }
    console.log(moves)
}

startGame()

