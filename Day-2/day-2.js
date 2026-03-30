const gParent = document.querySelector('.grandparent')
const parent = Array.from(document.getElementsByClassName('parent'))
const child = document.querySelector('.child')


// changeColor(gParent)
parent.forEach((e) => {changeColor(e)})

function changeColor(e){
    e.style.backgroundColor = '#03cbf4'
}