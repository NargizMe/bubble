let bubbleBox = document.querySelector('.bubble-box');
let bubble = document.querySelector('.bubble');
let startButton = document.querySelector('.start');
let stopButton = document.querySelector('.stop');

let easy = document.querySelector('.easy');
let medium = document.querySelector('.medium');
let hard = document.querySelector('.hard');

let gameMode = 3000;
let killedBubbles = 0;
let time;
let id = 0;
clicked = false;

// var context = new AudioContext();
// console.log(context)

function bubbling(){
    clicked = true;
console.log(gameMode)
    if(gameMode === 3000){
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
        }, 3000)
    }
    
    if(gameMode === 2000){
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
        }, 2000)
    }
    
    if(gameMode === 1000){
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
        }, 1000)
    }
}

function showScore(id){
    ++killedBubbles;
    console.log(document.querySelectorAll(`.bubble`));
    document.querySelectorAll(`.bubble`).forEach((el) => {
        if(id === el.getAttribute('data-id')){
            el.style.display = 'none'
        }
    })
}

startButton.addEventListener('click', () => {
    bubbling();
})

stopButton.addEventListener('click', function(){
    let name = prompt('Who is playing?');
    localStorage.setItem(`${name}`, killedBubbles);
    clearInterval(time);
})

easy.addEventListener('click', function(){
    gameMode =  3000;
    clearInterval(time);
    if(clicked){
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
        }, 3000)
        console.log(gameMode)
    }

})

medium.addEventListener('click', function(){
    gameMode =  2000;
    clearInterval(time);
    if(clicked){
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
        }, 2000)
        console.log(gameMode)
    }
})

hard.addEventListener('click', function(){
    gameMode =  1000;
    if(clicked){
        clearInterval(time);
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
        }, 1000)
        console.log(gameMode)
    }
})