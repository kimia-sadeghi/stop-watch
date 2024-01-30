
let second = 0
let millSecond = 0
let millSecondpart = document.querySelector('#tens')
let secondpart = document.querySelector('#second')
let btnStart = document.querySelector('#btn-start')
let btnStop = document.querySelector('#btn-stop')
let btnReset = document.querySelector('#btn-reset')
let timer

btnStart.addEventListener('click' , function() {
    timer = setInterval(startTime,10)
})

btnStop.addEventListener('click' , function() {
    clearInterval(timer)
})

btnReset.addEventListener('click' ,function() {
    clearInterval(timer)
    second = 0
    millSecond = 0
    secondpart.innerHTML ='00'
    millSecondpart.innerHTML ='00'
})

function startTime() {
    millSecond ++
    millSecondpart.innerHTML = millSecond   
     if(millSecond <10 ){
        millSecondpart.innerHTML = '0' + millSecond
     }
     if(millSecond > 99){
        second ++
        secondpart.innerHTML =  second
        millSecond = 0
        millSecondpart.innerHTML = '0' + 0
     }

     if(second < 10) {
        secondpart.innerHTML = '0' + second
     }
}



