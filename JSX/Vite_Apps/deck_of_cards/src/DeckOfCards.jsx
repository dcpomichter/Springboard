import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

function DeckOfCards() {
    const [deck, setDeck] = useState(null)
    const [drawn, setDrawn] = useState([])
    const [shuffling, setShuffling] = useState(false)
    async function getDeck() {
        setShuffling(true)
        const res = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
        setDeck(res.data);
        setDrawn([])
        setShuffling(false)
    }
    useEffect(() => {
        getDeck()
    }, [])

    const drawCard = async () => {
        const deckId = deck.deck_id;
        const drawUrl = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;
        if (deck.remaining > 0) {
            const res = await axios.get(drawUrl)
            setDeck(res.data)
            setDrawn([...drawn, res.data.cards[0]])
        } else {
            alert("Error: No cards remaining")
        }
    }
    let buttonDisplay;
    if (deck) {
        if (deck.remaining > 0) {
            buttonDisplay = <button onClick={drawCard} disabled={shuffling}>Draw!</button>
        } else {
            buttonDisplay = <button onClick={getDeck} disabled={shuffling}>Reshuffle!</button>
        }
    } else {
        buttonDisplay = <h2>Loading...</h2>
    };
    return (
        <>
            {buttonDisplay}
            {drawn.map(card =>
                <Card
                    value={card.value}
                    suit={card.suit}
                    img={card.image}
                    key={card.code}
                />
            )}
        </>
    )
}

export default DeckOfCards
