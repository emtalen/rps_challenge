import React, { Component } from "react";
import { botMove, assessGame } from "./gameLogic";
class SimpleGame extends Component {
  state = {
    playerChoice: "",
    botChoice: "",
    playerScore: 0,
    botScore: 0
  };
  increasePoints = result => {
    let score;
    switch (result) {
      case "You Win!":
        score = {
          state: "playerScore",
          value: this.state.playerScore + 1
        };
        break;
      case "Computer wins!":
        score = {
          state: "botScore",
          value: this.state.botScore + 1
        };
        break;
    }
    this.setState({
      [score.state]: score.value
    });
  };
  async handleMove(event) {
    let playerChoice = event.target.value;
    let botChoice = botMove();
    let result = await assessGame(playerChoice, botChoice);
    if (result != "It's a draw!") {
      this.increasePoints(result);
    }
    this.setState({
      playerChoice: playerChoice,
      botChoice: botChoice,
      result: result
    });
  }
  render() {
    return (
      <>
        <h1 id="simplegame-header">Play to score for every win!</h1>
        <button
          onClick={event => this.handleMove(event)}
          value="rock"
          id="rock"
        >
          Rock
        </button>
        <button
          onClick={event => this.handleMove(event)}
          value="paper"
          id="paper"
        >
          Paper
        </button>
        <button
          onClick={event => this.handleMove(event)}
          value="scissors"
          id="scissors"
        >
          Scissors
        </button>
        {this.state.result && (
          <>
            <h3 className="moves">You chose: {this.state.playerChoice}</h3>
            <h3 className="moves">Computer chose: {this.state.botChoice}</h3>
            <h2>{this.state.result}</h2>
            <div>
              <div><h5>Player Score: {this.state.playerScore}</h5></div>
              <div><h5>Computer Score: {this.state.botScore}</h5></div>
            </div>
          </>
        )}
      </>
    );
  }
}
export default SimpleGame;
