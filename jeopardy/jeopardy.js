// categories is the main data structure for the app; it looks like this:

//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]
const jeopardy = document.getElementById('jeopardy')
const jeopardy_header = document.getElementsByTagName('thead')
const jeopardy_body = document.getElementsByTagName('tbody')
const start_btn = document.getElementById('start-btn')
let categories = [];
async function loadCategories() {
    const res = await axios.get(`https://rithm-jeopardy.herokuapp.com/api/categories?count=100`)
    categories = []
    for (let slot of res.data) {
        categories.push(slot)
    }
}
/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

async function getCategoryIds(NUM_CATEGORIES) {
    await loadCategories()
    const categoryIds = []
    for (let i = 0; i < NUM_CATEGORIES; i++) {
        let index = Math.floor(Math.random() * (categories.length))
        let present = false
        let id = categories[index].id
        categoryIds.forEach(function (currentValue) {
            if (currentValue === id) {
                present = true;
                i--
            }
        })
        if (!present) {
            categoryIds.push(id)
        }
    }


    return categoryIds
}
/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */

async function getCategory(catId) {
    const catData = await axios.get(`https://rithm-jeopardy.herokuapp.com/api/category?id=${catId}`)
    return catData.data
}
/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

async function fillTable() {
    const idList = await getCategoryIds(6)
    const headerRow = document.createElement('tr')
    headerRow.className = 'headers'
    jeopardy_header[0].appendChild(headerRow)
    const question1 = document.createElement('tr')
    const question2 = document.createElement('tr')
    const question3 = document.createElement('tr')
    const question4 = document.createElement('tr')
    const question5 = document.createElement('tr')
    jeopardy_body[0].appendChild(question1)
    jeopardy_body[0].appendChild(question2)
    jeopardy_body[0].appendChild(question3)
    jeopardy_body[0].appendChild(question4)
    jeopardy_body[0].appendChild(question5)
    const selectedCategories = []
    for (let category of idList) {
        let catData = await getCategory(category)
        selectedCategories.push(catData)
    }
    for (let category of selectedCategories) {
        let categoryHeader = document.createElement('td')
        categoryHeader.className = category.title
        categoryHeader.innerText = category.title
        headerRow.appendChild(categoryHeader)
        for (let i = 0; i < category.clues.length; i++) {
            let clueSlot = document.createElement('td')
            clueSlot.className = 'questions'
            clueSlot.dataset.showing = null
            clueSlot.dataset.question = category.clues[i].question
            clueSlot.dataset.answer = category.clues[i].answer
            clueSlot.innerText = '?'
            jeopardy_body[0].children[i].appendChild(clueSlot)
        }
    }
}
/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

function handleClick(evt) {
    console.log(evt)
    if (evt.target.classList.contains('questions')) {
        if (evt.target.dataset.showing === 'null') {
            evt.target.dataset.showing = 'question'
            evt.target.innerText = evt.target.dataset.question
        } else if (evt.target.dataset.showing === 'question') {
            evt.target.dataset.showing = 'answer'
            evt.target.classList.add('answers')
            evt.target.innerText = evt.target.dataset.answer
        }
    }
}
/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

function showLoadingView() {
    jeopardy_body[0].innerHTML = ''
    jeopardy_header[0].innerHTML = ''
    let loader = document.createElement('span')
    loader.className = 'loader'
    loader.id = 'loader'
    jeopardy.appendChild(loader)
    start_btn.innerText = 'Start!'
    start_btn.className = ''
}

/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {
    jeopardy_body.innerHTML = ''
    jeopardy_header.innerHTML = ''
    let loader = document.getElementById('loader')
    jeopardy.removeChild(loader)
    start_btn.innerText = 'Restart!'
    start_btn.className = 'restart'
}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {
    showLoadingView()
    setTimeout(hideLoadingView, 3000)
    setTimeout(await fillTable, 3000)
}

/** On click of start / restart button, set up game. */

start_btn.addEventListener('click', setupAndStart)

/** On page load, add event handler for clicking clues */
document.addEventListener('click', handleClick)
