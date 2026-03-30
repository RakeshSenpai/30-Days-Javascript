const btn = document.getElementById('changeColor')
const box = document.querySelector('.box')

function changeColor(){
    const color = '#' + Math.floor(Math.random() * 16774894).toString(16)
    box.style.backgroundColor = color
}

btn.addEventListener('click' , (e) => {
    changeColor()
})