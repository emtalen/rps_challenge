import React, { Component } from "react";
import { botMove, assessGame } from "./gameLogic";
import "./style.css";

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
        <h5>Choose your weapon</h5>
        <button
          onClick={event => this.handleMove(event)}
          value="rock"
          id="rock"
          class="movebutton"
        >
          Rock
          <br />
        </button>
        <button
          onClick={event => this.handleMove(event)}
          value="paper"
          id="paper"
          class="movebutton"
        >
          Paper
          <br />
        </button>
        <button
          onClick={event => this.handleMove(event)}
          value="scissors"
          id="scissors"
          class="movebutton"
        >
          Scissors
          <br />
        </button>
        {this.state.result && (
          <>
            <h3 id="playermove">You chose: {this.state.playerChoice}</h3>
            <h3 id="botmove">Computer chose: {this.state.botChoice}</h3>
            <h2>{this.state.result}</h2>

            <h5 id="player-score">Player Score: {this.state.playerScore}</h5>
            <h5 id="bot-score">Computer Score: {this.state.botScore}</h5>
          </>
        )}
        <div>
          <a
            class="ui button"
            id="go-back-tab"
            onClick={event => (window.location.href = "/")}
          >
            Go back
          </a>
        </div>
      </>
    );
  }
}
export default SimpleGame;
