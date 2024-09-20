

function createDeck () {
    // différentes valuers des cartes
    let deck = []
    const suits = ["♠︎","♣︎","♡","♢"]
    const values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

    // distribue les valeurs dans les séries
    for (let s=0;s<suits.length;s++) {
        for (let v=0;v<values.length;v++) {
            let card = {'value':values[v], 'suit':suits[s]};
            deck.push(card);
        }
    }
    console.log(deck)
}

cardDeck = createDeck ()

function shuffleDeck (deck) {
    startIndex = deck.length
    randomIndex = Math.random()*startIndex
    startIndex=randomIndex
    console.log(startIndex)
    return startIndex
}

shuffleDeck (cardDeck)