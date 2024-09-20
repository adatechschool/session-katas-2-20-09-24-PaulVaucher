

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

deck = createDeck ()

// randomize les cartes (code pompé)
function shuffleDeck (deck) {
    for (let i = deck.length - 1; i > 0; i--) { //deck is undefined ?!
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    console.log(deck)
    return deck;
}

shuffleDeck (deck)