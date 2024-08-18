let firstcard = getRandomnum()
let secondcard = getRandomnum()
let sum = firstcard + secondcard
isAlive = true
hasblackjack = false
let cards = []

let gemel = document.getElementById("game-el")
if (isAlive === true) {

    function gamestart() {
        if (sum === 22) {
            gemel.innerHTML = "YOU GOT BLACKJACK"
            hasblackjack = true
        }
        else if (sum === 33) {
            gemel.innerHTML = "DO YOU DRON A NEW CARD?"
        }
        else {
            gemel.innerHTML = "YOU LOOSE THE GAME"
        }

    }
}
function getRandomnum(){
    randnum = Math.floor(Math.random() * 12 + 1)
    console.log(randnum)
}