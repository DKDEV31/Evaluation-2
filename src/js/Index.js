// Elements
const rollDiceSvg = $('.roll-icon')
const rollDice = $('.roll')
const holdPoint = $('.hold')
const holdPointSvg = $('.hold-icon')
const newGame = $('.new-game')
const newGameSvg = $('.new-game-icon')
const totalPlayer1 = $('#total1')
const totalPlayer2 = $('#total2')
const round1 = $('#current1')
const round2 = $('#current2')
const player1 = $('#player1')
const player2 = $('#player2')
//Variables
let round = 0
let globalPlayer1 = 12
let globalPlayer2 = 0
let playerInGame = 0
//Instructions

newGame.click(() => {
    playAgain()
    totalPlayer1.text(globalPlayer1)
    totalPlayer2.text(globalPlayer2)
})

rollDice.click(() => rollAgain())

holdPoint.click(() => hold())

rollDice.hover(
    () => rollDiceSvg.css('transform', 'rotate(360deg)'),
    () => {
        rollDiceSvg.css('tranform', '')
        rollDiceSvg.css('transform', 'rotate(-360deg)')
    }
)
holdPoint.hover(
    () => holdPointSvg.css('color', 'white'),
    () => holdPointSvg.css('color', 'red')
)
newGame.hover(
    () => newGameSvg.css('color', 'white'),
    () => newGameSvg.css('color', 'red')
)
// Functions
function rollAgain() {
    let randomDiceShot = Math.floor(Math.random() * 6)
    console.log(randomDiceShot)
    if (randomDiceShot !== 1) {
        round += randomDiceShot
        if (playerInGame === 1) {
            round1.text(round)
        } else {
            round2.text(round)
        }
    } else {
        round = 0
        if (playerInGame === 1) {
            playerInGame = 2
            player1.toggleClass('active-player')
            player2.toggleClass('active-player')
            round1.text(0)
        } else {
            playerInGame = 1
            player2.toggleClass('active-player')
            player1.toggleClass('active-player')
            round2.text(0)
        }
    }
}

function hold() {
    if (playerInGame === 1) {
        globalPlayer1 += round
        round = 0
        playerInGame = 2
        round1.text(0)
        player1.toggleClass('active-player')
        player2.toggleClass('active-player')
        totalPlayer1.text(globalPlayer1)
    } else {
        globalPlayer2 += round
        round = 0
        playerInGame = 1
        round2.text(0)
        player2.toggleClass('active-player')
        player1.toggleClass('active-player')
        totalPlayer2.text(globalPlayer2)
    }
}

function playAgain() {
    round = 0
    globalPlayer1 = 0
    globalPlayer2 = 0
    playerInGame = 1
    player1.addClass('active-player')
    round1.text(0)
    round2.text(0)
}
