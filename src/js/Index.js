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
const one = $('.one')
const two = $('.two')
const three = $('.three')
const four = $('.four')
const five = $('.five')
const six = $('.six')
const seven = $('.seven')
const dice = $('.dice')
//Variables
let round = 0
let globalPlayer1 = 0
let globalPlayer2 = 0
let playerInGame = 0
let diceRender = 0
let gameOn
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
    if (gameOn) {
        dice.addClass('dice-rotation')
        diceRoll(0)
        let randomDiceShot = Math.floor(Math.random() * 6)
        console.log(randomDiceShot)
        setTimeout(() => {
            if (randomDiceShot !== 1) {
                console.log('execute')
                round += randomDiceShot
                diceRender = randomDiceShot
                diceRoll(diceRender)
                if (playerInGame === 1) {
                    round1.text(round)
                } else {
                    round2.text(round)
                }
            } else {
                round = 0
                diceRoll(1)
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
            dice.removeClass('dice-rotation')
        }, 2100)
    }
}

function hold() {
    if (gameOn) {
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
}

function playAgain() {
    gameOn = true
    round = 0
    globalPlayer1 = 0
    globalPlayer2 = 0
    playerInGame = 1
    player2.removeClass('active-player')
    player1.removeClass('active-player')
    player1.addClass('active-player')
    round1.text(0)
    round2.text(0)
    diceRoll(0)
}

function diceRoll(diceNumber) {
    switch (diceNumber) {
        case 0:
            one.css('opacity', 0)
            two.css('opacity', 0)
            three.css('opacity', 0)
            four.css('opacity', 0)
            five.css('opacity', 0)
            six.css('opacity', 0)
            seven.css('opacity', 0)
            break
        case 1:
            seven.css('opacity', 1)
            break
        case 2:
            two.css('opacity', 1)
            three.css('opacity', 1)
            break
        case 3:
            two.css('opacity', 1)
            three.css('opacity', 1)
            seven.css('opacity', 1)
            break
        case 4:
            two.css('opacity', 1)
            three.css('opacity', 1)
            one.css('opacity', 1)
            four.css('opacity', 1)
            break
        case 5:
            one.css('opacity', 1)
            two.css('opacity', 1)
            three.css('opacity', 1)
            four.css('opacity', 1)
            seven.css('opacity', 1)
            break
        case 6:
            five.css('opacity', 1)
            six.css('opacity', 1)
            one.css('opacity', 1)
            four.css('opacity', 1)
            two.css('opacity', 1)
            three.css('opacity', 1)
            break
        default:
            break
    }
}
