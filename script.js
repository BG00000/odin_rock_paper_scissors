let rockBtn = document.getElementById('rock-btn')
let paperBtn = document.getElementById('paper-btn')
let scissorBtn = document.getElementById('scissor-btn')
let humanResult = document.getElementById('human-result')
let computerResult = document.getElementById('computer-result')

let computerWin = 0
let humanWin = 0
let val
let computerMove
let humanMove



function findComputerMove () {
    val = Math.floor((Math.random() * 3) + 1)
    
    if (val === 1) {
        computerMove = 'rock'
    } else if (val === 2) {
        computerMove = 'paper'
    } else {
        computerMove = 'scissors'
    }
    
    return computerMove
}



rockBtn.addEventListener('click', () => {
    humanMove = 'rock'
    findComputerMove(computerMove, humanMove)
    

    if (computerMove === 'paper') {
        computerWin ++
        computerResult.innerText = `computer: ${computerWin}`
    } else if (computerMove === 'scissors') {
        humanWin ++
        humanResult.innerText = `human: ${humanWin}`
    }

})

paperBtn.addEventListener('click', () => {
    humanMove = 'paper'
    findComputerMove(computerMove, humanMove)
    

    if (computerMove === 'scissors') {
        computerWin ++
        computerResult.innerText = `computer: ${computerWin}`
    } else if (computerMove === 'rock') {
        humanWin ++
        humanResult.innerText = `human: ${humanWin}`
    }

})

scissorBtn.addEventListener('click', () => {
    humanMove = 'scissors'
    findComputerMove(computerMove, humanMove)
    

    if (computerMove === 'rock') {
        computerWin ++
        computerResult.innerText = `computer: ${computerWin}`
    } else if (computerMove === 'paper') {
        humanWin ++
        humanResult.innerText = `human: ${humanWin}`
    }

})

