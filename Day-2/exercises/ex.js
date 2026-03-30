/*

const btn = document.getElementById('changeColor')
const box = document.querySelector('.box')

function changeColor(){
    const color = '#' + Math.floor(Math.random() * 16774894).toString(16)
    box.style.backgroundColor = color
}

btn.addEventListener('click' , (e) => {
    changeColor()
})

*/

const form = document.querySelector('#form')

form.addEventListener('submit' , (e) => {
    e.preventDefault()
        const data = new FormData(form)
        const username = data.get('username')
        const password = data.get('password')
        if(username === '' || password === ''){
            alert('Please complete your form')
            return;
        }

        const firstDiv = document.createElement('div')
        const secondDiv = document.createElement('div')
        const validate = document.createElement('div')
        validate.innerText = '✅'
        firstDiv.innerText = username
        secondDiv.innerText = password
        form.appendChild(firstDiv)
        form.appendChild(secondDiv)
        form.appendChild(validate)

})

