const btn = document.getElementById('clBtn')
const div = document.querySelector('.container')
const li = document.querySelector('li')

// div.addEventListener('click' , (e) => {
//     console.log('the container clicked')
//     e.stopPropagation()
// }, false)
// li.addEventListener('click' , (e) => {
//     console.log('the Li clicked')
//     e.stopPropagation()
// }, false)

// btn.addEventListener('click' , (e) => {
//     console.log(e)
// })

btn.addEventListener('click', (e)=> {
    const newItem = document.createElement('h3')
    newItem.innerText = 'Hi i am new here'
    div.appendChild(newItem)
})

