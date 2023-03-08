const squares =  document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.getElementById('timeleft')
const score = document.getElementById('score')

let res = 0 ; 
let hitPos ;
let currenTime = 10 ;
function RandomSquare (){
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSqa = squares[Math.floor(Math.random()*9)]
    randomSqa.classList.add('mole')
    hitPos = randomSqa.id
}
squares.forEach(square =>{
    square.addEventListener('mousedown',()=>{
        if (square.id == hitPos)  {
            res++ ; 
            score.textContent = res; 
            hitPos= null;
        } 
    } )
})
function moveMole(){
    let timerId = null 
    timerId = setInterval(RandomSquare,700)
}


function countDown(){
currenTime -- ; 
timeLeft.innerHTML = currenTime
if(currenTime == 0 ){
    clearInterval(contDownTimerId)
    clearInterval(timerId)
    alert (" Game over ! your score is " + res)
}
}

moveMole()
 let contDownTimerId = setInterval(countDown,1000)