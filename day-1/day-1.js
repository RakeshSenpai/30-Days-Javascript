/* const parent = document.querySelector('.parent')
// console.log(parent)
// console.log(parent.children)
// console.log(parent.children[0])

for (let i = 0; i < parent.children.length; i++){
    console.log(parent.children[i].innerHTML)
}

parent.children[2].style.color = 'grey'
*/
const parent = document.querySelector('.parent')
const body = document.querySelector('body')

parent.children[2].innerText = 'Hello i am third children'
const div = document.createElement('div')
div.innerText = 'Hello i am newly Born Children'
body.appendChild(div)
div.setAttribute('class' , 'new-child')
console.log(div.getAttribute('class'))
const newDiv = document.querySelector('.new-child')
newDiv.style.color = 'red'


