import Chance from 'chance';

const botMove = () => {
    let chance = new Chance()
    let move = chance.pickone(['rock', 'paper', 'scissors'])
    return move
}

export { botMove }