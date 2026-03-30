const gParent = document.querySelector('.grandparent')
// const parent = Array.from(document.getElementsByClassName('parent'))
// const child = document.querySelector('.child')

const parents = Array.from(gParent.children)
const childrenOne = parents[0]
const children = childrenOne.children

changeColor(children[0])

// changeColor(gParent)
// parent.forEach((e) => {changeColor(e)})

function changeColor(e){
    e.style.backgroundColor = '#03cbf4'
}

