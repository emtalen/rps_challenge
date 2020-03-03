import Chance from "chance";

const botMove = () => {
  let chance = new Chance();
  let move = chance.pickone(["rock", "paper", "scissors"]);
  return move;
};

let playerWin = 'You Win!'
let botWin = 'Computer wins!'

const assessGame = (player1, player2) => {
  let result;
  switch ([player1, player2].join()) {
    case ["rock", "scissors"].join():
    case ["scissors", "paper"].join():
    case ["paper", "rock"].join():
      result = playerWin
      break;
    case ["scissors", "rock"].join():
    case ["paper", "scissors"].join():
    case ["rock", "paper"].join():
      result = botWin
      break;
    default:
      result = "It's a draw!";
      break;
  }
  return result
};

const scoreEachWin = (playerWin, playerScore, botScore, results) => {
  let score = results == playerWin ? playerScore + 1 : botScore + 1;
  return score 
}

 const bestOfThreeScore = (playerScore, finalPlayerScore, finalBotScore) => {
  if (playerScore > 1)
  finalPlayerScore = 1
  else
  finalBotScore = 1
  return finalPlayerScore, finalBotScore
}

export { botMove, assessGame, scoreEachWin, bestOfThreeScore };
