let pokeAPI = 'https://pokeapi.co/api/v2/';
let pokeList = 'https://pokeapi.co/api/v2/pokemon?limit=100000'
let pokeArea = document.getElementById("poke-area")
function pokeDex() {
    pokeArea.innerHTML = ''
    fetch(pokeList)
        .then(data => {
            return data.json()
        })
        .then(json => {
            //console.log(json) <= First Task
            let pokeDx = []
            let maxDigits = json.count
            let pokeURL = []
            json.results.forEach(data => pokeDx.push(data))
            for (i = 0; i < 3; i++) {
                let choice = Math.floor(Math.random() * maxDigits - 1)
                let url = pokeDx[choice].url
                pokeURL.push(url)
            }
            return Promise.all(pokeURL.map(data => fetch(data).then(result => result.json())))
        })
        .then(pokeInfo => {
            //pokeInfo.forEach(pokemon => console.log(pokemon) <= Second Task
            let i = 0
            let flavorText = []
            pokeInfo.forEach(data => fetch(data.species.url)
                .then(data => data.json())
                .then(json => {
                    let flavorList = json.flavor_text_entries
                    flavorList.forEach(data => {
                        if (data.language.name === 'en') {
                            flavorText.push(data.flavor_text)
                        }
                    })
                    let name = pokeInfo[i].name // <= Third Task
                    let img = pokeInfo[i].sprites.front_default
                    let desc = flavorText[i]
                    pokeArea.innerHTML += makePokeCard(name, img, desc)
                    i++
                }))
        })
        .catch(err => console.log(err))
}
function makePokeCard(name, img, desc) {
    return `
    <div>
        <h1>${name}</h1>
        <img src=${img}>
        <p>${desc}</p>
    </div>
    `;
}
