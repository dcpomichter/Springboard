let task1 = document.getElementById('task1')
task1.innerText = "Use 'innerText' to change this content. I have changed this content"
let task2 = document.getElementById('task2')
task2.innerHTML = "Use 'innerHTML' to add a submit button here. <button type=button>Submit</button>"
let body = document.getElementsByTagName('body')
body[0].style.backgroundColor = '#232323'
let items = document.getElementsByClassName('item')
for (let i = 0; i < items.length; i++) {
    items[i].style.border = 'thin solid white'
}
let task5 = document.getElementById('task5')
task5.setAttribute('href', 'https://www.springboard.com/')
let task6 = document.getElementById('task6')
task6.value = 'DOM Master'
let task7 = document.getElementById('task7')
task7.classList.add('new-class')
let task8 = document.getElementById('task8')
let btn = document.createElement('button')
task8.append(btn)
let task9 = document.getElementById('task9')
task9.remove()
