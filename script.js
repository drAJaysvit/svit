const game_info = document.querySelector('.game-info');
const boxs = document.querySelectorAll('.box');
const btn = document.querySelector('.btn');
const robot_btn = document.querySelector('[robot]');

let currentPlayer;
let gameGrid;
let count;
const winningPosition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

// initialise the game
function initialise_game() {
    currentPlayer = 'X';
    gameGrid = ["", "", "", "", "", "", "", "", "", ""];
    btn.classList.remove('active');
    game_info.textContent = `Current Player - ${currentPlayer}`;
    robot_btn.textContent = `Robot - ${currentPlayer}`;
    count = 0;
    for (const bb of boxs) {
        bb.textContent = ''
        bb.style = 'cursor: pointer'
        bb.classList.remove('win');
    }
    robot_btn.style = 'cursor: pointer';
}

initialise_game();

function handl_Click(index) {
    if (boxs[index].textContent === '') {
        boxs[index].textContent = currentPlayer;
        gameGrid[index] = currentPlayer;
        boxs[index].style = 'cursor: not-allowed'
        // Check for player winnung
        if(CheckWinner() === true) return
        // check all are filled
        swap_Player();
        checkboxs();
        // Swap Turn
    }
}
function swap_Player() {
    if (currentPlayer === 'X') currentPlayer = 'O';
    else currentPlayer = 'X';
    game_info.textContent = `Current Player - ${currentPlayer}`;
    robot_btn.textContent = `Robot - ${currentPlayer}`;
}

function CheckWinner() {

    for (const item of winningPosition) {
        let i = 0;
        let j = 0;
        for (const ele of item) {
            if ('X' == gameGrid[ele]) {
                ++i;
            }
            else if ('O' == gameGrid[ele]) {
                ++j;
            }
        }
        if (i === 3) {
            game_info.textContent = `Winner - ${currentPlayer}`
            btn.classList.add('active');
            console.log('XXXXX')
            for (const ele of item) {
                boxs[ele].classList.add('win')
            }
            for (const box of boxs) {
                box.style.pointerEvents = 'none'
            }
            return true
        }
        else if (j === 3) {
            game_info.textContent = `Winner - ${currentPlayer}`
            console.log('ooooooo')
            btn.classList.add('active');
            for (const ele of item) {
                boxs[ele].classList.add('win')

            }
            for (const box of boxs) {
                box.style.pointerEvents = 'none'
            }
            return true
        }
    }
}

function checkboxs() {

    ++count
    if (count === 9) {
        btn.classList.add('active');
    }
}




robot_btn.addEventListener('click', robot_work)

function robot_work() {
    console.log('robot')
    const index = Math.floor(Math.random() * 9);
    if (count != 9 && !CheckWinner()) {
        if (boxs[index].textContent === '') {
            handl_Click(index);
        }
        else robot_work();
    }
    else robot_btn.style.pointerEvents = 'none'
}



btn.addEventListener('click', initialise_game);

for (const index in boxs) {
    boxs[index].addEventListener('click', () => {
        handl_Click(index);
    })
}



