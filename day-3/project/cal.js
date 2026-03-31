const buttons = document.querySelectorAll("button")

buttons.forEach(e => {
    e.addEventListener('click', () => {
        if(e.dataset.value){
            console.log('Numbers:', e.dataset.value)
        }
        if(e.dataset.operator){
            console.log('Operand:' , e.dataset.operator)
        }
    })
})