const numberBtn = document.querySelectorAll('[data-value]')
const deleteBtn = document.querySelector('[data-delete]')
const allClearBtn = document.querySelector('[data-all-clear]')
const equalsBtn = document.querySelector('[data-equal]')
const operatorBtn = document.querySelectorAll('[data-operator]')
const currentOperand = document.querySelector('.current-operand')
const previousOperand = document.querySelector('.previous-operand')

numberBtn.forEach(e => {
    let numbers = ''
    e.addEventListener('click' , () => {
            numbers += e.innerText
            currentOperand.innerText = numbers
    })
})
