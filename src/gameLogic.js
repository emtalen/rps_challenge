import Chance from "chance";

const botMove = () => {
  let chance = new Chance();
  let move = chance.pickone(["rock", "paper", "scissors"]);
  return move;
};

const assessGame = (player1, player2) => {
  let result;
  switch ([player1, player2].join()) {
    case ["rock", "scissors"].join():
    case ["scissors", "paper"].join():
    case ["paper", "rock"].join():
      result = "Player one wins!";
      break;
    case ["scissors", "rock"].join():
    case ["paper", "scissors"].join():
    case ["rock", "paper"].join():
      result = "Computer wins!";
      break;
    default:
      result = "It's a draw!";
      break;
  }
  return result
};

export { botMove };
