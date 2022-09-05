let bubbleBox = document.querySelector('.bubble-box');
let startButton = document.querySelector('.start');
let stopButton = document.querySelector('.stop');
let score = document.querySelector('.score-count');

let easy = document.querySelector('.easy');
let medium = document.querySelector('.medium');
let hard = document.querySelector('.hard');

let gameMode = 3000;
let killedBubbles = 0;
let time;
let id = 0;
let clicked = false;
let audio = new Audio('bubble.wav');

function intervalFun(gameMood){
    time = setInterval(() => {
        id++;
        const getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min);
        bubbleBox.innerHTML += `
            <div 
                class="bubble" 
                data-id="${id}"
                style="top: ${getRandom(0, 430 - 200)+'px'}; left: ${getRandom(0, 430 - 200)+'px'}" 
                onclick="showScore( '${id}' )"
            >
            </div>
        `
        score.innerText = `${killedBubbles}`;

        if(document.querySelectorAll(`.bubble`).length >= 30){
            clearInterval(time);
            alert("Game Over :| ");
        }
    }, gameMood)
}

startButton.addEventListener('click', () => {
    clearInterval(time);
    clicked = true;
    killedBubbles = 0;
    intervalFun(gameMode);
})

stopButton.addEventListener('click', function(){
    clearInterval(time);
    let name = prompt('Who is playing?');
    localStorage.setItem(`${name}`, killedBubbles);
    bubbleBox.innerHTML = '';

})

easy.addEventListener('click', function(){
    gameMode =  3000;
    clearInterval(time);
    if(clicked){
        intervalFun(3000);
    }
})

medium.addEventListener('click', function(){
    gameMode =  2000;
    clearInterval(time);
    if(clicked){
        intervalFun(2000);
    }
})

hard.addEventListener('click', function(){
    gameMode =  1000;
    clearInterval(time);
    if(clicked){
        intervalFun(1000);
    }
})

function showScore(id){
    audio.pause();
    audio.currentTime = 0;
    ++killedBubbles;
    document.querySelectorAll(`.bubble`).forEach((el) => {
        if(id === el.getAttribute('data-id')){
            audio.play();
            el.remove();
        }
    })
}
