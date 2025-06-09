function PokeGame() {
    const pokeList = [
        { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
        { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
        { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
        { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
        { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
        { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
        { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
        { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
    ]
    const hand1 = [];
    const hand2 = [];
    let hand1Xp = 0;
    let hand2Xp = 0;
    while (pokeList.length) {
        let currentPoke = pokeList.pop();
        let randList = Math.floor(Math.random() * 2) + 1;
        if (randList === 1) {
            if (hand1.length < 4) {
                hand1.push(currentPoke)
                hand1Xp += currentPoke.base_experience
            } else {
                hand2.push(currentPoke)
                hand2Xp += currentPoke.base_experience
            }
        } else {
            if (hand2.length < 4) {
                hand2.push(currentPoke)
                hand2Xp += currentPoke.base_experience
            } else {
                hand1.push(currentPoke)
                hand1Xp += currentPoke.base_experience
            }
        }
    }
    return (
        <main>
            <PokeDex pokeDex={hand1} xpTotal={hand1Xp} isWinner={hand1Xp > hand2Xp ? "True" : ""} />
            <PokeDex pokeDex={hand2} xpTotal={hand2Xp} isWinner={hand1Xp < hand2Xp ? "True" : ""} />
        </main>
    )
}
