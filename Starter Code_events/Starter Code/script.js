document.addEventListener('DOMContentLoaded', function () {

    const form = document.querySelector('#color-form')
    const input = document.querySelector('#color-input')
    const btn = document.querySelector('#new-box-button')
    const div = document.querySelector('#box-container')
    let boxColor = 'black'
    let boxCounter = 0
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        boxColor = input.value;
        const boxes = document.getElementsByClassName('box')
        for (let box of boxes) {
            console.log(box)
            box.style.backgroundColor = boxColor;
        }
        input.value = '';
    })
    createBox = function () {
        newBox = document.createElement('p')
        newBox.classList.add('box')
        newBox.id = 'content-' + newBox.classList + boxColor + boxCounter
        newBox.dataset.idtracking = newBox.id
        newBox.innerText = newBox.dataset.idtracking
        boxCounter++
        div.appendChild(newBox)
    }
    btn.addEventListener('click', function (e) {
        createBox()
    })
    document.addEventListener('dblclick', function (e) {
        if (e.target.classList.contains('box')) {
            e.target.remove()
        }
    })
    document.addEventListener('mouseover', function (e) {
        if (e.target.classList.contains('box')) {
            e.target.innerText = 'Coordinates: ' + e.pageX + ' x ' + e.pageY;
        }
    })
    document.addEventListener('mouseout', function (e) {
        if (e.target.classList.contains('box')) {
            e.target.innerText = e.target.dataset.idtracking;
        }
    })
    document.addEventListener('keypress', function (e) {
        if (e.target.id !== 'color-input') {
            if (e.key === 'n') {
                createBox()
            };
            if (e.key === 'N') {
                createBox()
            }
        }
    })
})
