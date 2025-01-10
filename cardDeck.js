let deckAPI = 'https://deckofcardsapi.com/api/deck/'
function draw() {
    fetch(deckAPI + 'new/draw/?count=1')
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log('You drew the ' + json.cards[0].value.toLowerCase() + ' of ' + json.cards[0].suit.toLowerCase() + '!');
        })
        .catch(err => console.log(err));
}
cards = [];
function draw2() {
    fetch(deckAPI + 'new/draw/?count=1')
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            cards.push(json.cards[0]);
            deck = json.deck_id;
            fetch(deckAPI + deck + '/draw/?count=1')
                .then(function (response) {
                    return response.json()
                })
                .then(function (json) {
                    cards.push(json.cards[0]);
                    cards.forEach(function (card) {
                        console.log('You drew the ' + card.value.toLowerCase() + ' of ' + card.suit.toLowerCase() + '!')
                    })
                })
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err))
}
let deckId = null
let $btn = $('button')
let $cardArea = $('#card-area')
fetch(deckAPI + 'new/draw/?count=1')
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        deckId = json.deck_id

    })
    .catch(err => console.log(err));
$btn.on('click', function () {
    fetch(deckAPI + deckId + '/draw/?count=1')
        .then(function (response) {
            return response.json();
        })
        .then(data => {
            let cardImg = data.cards[0].image;
            let angle = Math.random() * 45 - 10;
            $cardArea.append(
                $('<img>', {
                    src: cardImg,
                    css: {
                        transform: `rotate(${angle}deg)`
                    }
                })
            )
            if (data.remaining === 0) $btn.remove()
        });
})
