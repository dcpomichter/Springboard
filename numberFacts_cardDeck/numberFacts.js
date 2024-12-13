let numbersAPI = 'http://numbersapi.com/';
function numberFact(num) {
    fetch(numbersAPI + num + '/trivia?json')
        .then(response => response.json())
        .then(json => console.log(json.text))
        .catch((err) => console.log(err));
}
function numberFacts(num) {
    for (let i = 0; i < num; i++) {
        fetch(numbersAPI + 'random/trivia?json')
            .then(response => response.json())
            .then(json => console.log(json.text))
            .catch((err) => console.log(err));
    }
}
promises = [numberFact(13), numberFact(13), numberFact(13), numberFact(13)]
Promises.all(promises)
    .then(function (facts) {
        for (let i = 0; i < facts.length; i++) {
            console.log(facts[i].text)
        }
    })
    .catch(err => console.log(err))
