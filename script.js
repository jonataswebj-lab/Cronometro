let totalMilissegundos = 0
let timer
let spanMinutos = document.querySelector('#minutos')
let spanSegundos = document.querySelector('#segundos')
let spanMilissegundos = document.querySelector('#milissegundos')
let startButton = document.querySelector('#startButton')

function Start(){
    if (timer) return

    startButton.innerText = 'Start'
    timer = setInterval(() => {
        totalMilissegundos += 10
        
        let minutos = Math.floor(totalMilissegundos / 60000)
        let segundos = Math.floor((totalMilissegundos % 60000) / 1000)
        let milissegundos = Math.floor((totalMilissegundos % 1000) / 10)
        
        spanMinutos.innerText = minutos.toString().padStart(2, '0')
        spanSegundos.innerText = segundos.toString().padStart(2, '0')
        spanMilissegundos.innerText = milissegundos.toString().padStart(2, '0')
    }, 10);
}

function Stop(){
    clearInterval(timer)
    timer = null
    startButton.innerText = 'Resume'
}

function Reset(){
    clearInterval(timer)
    timer = null
    totalMilissegundos = 0
    spanMinutos.innerText = '00'
    spanSegundos.innerText = '00'
    spanMilissegundos.innerText = '00'
    startButton.innerText = 'Start'
}