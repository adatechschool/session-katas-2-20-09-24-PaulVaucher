

function createDeck () {
    let deck = []
    const suits = ["♠︎","♣︎","♡","♢"]
    const values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

    for (let s=0;s<suits.length;s++) {
        for (let v=0;v<values.length;v++) {
            let card = {'value':values[v], 'suit':suits[s]};
            deck.push(card);
        }
    }
    console.log(deck)
}

createDeck ()