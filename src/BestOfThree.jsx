import React, { Component } from "react";
import { botMove, assessGame } from "./gameLogic";

class BestOfThree extends Component {
  state = {
    playerChoice: "",
    botChoice: "",
    playerScore: 0,
    botScore: 0,
    gameScorePlayer: 0,
    gameScoreBot: 0
  };

  increasePoints = result => {
    let score;
    switch (result) {
      case "You Win!":
        score = {
          state: "playerScore",
          value: this.state.playerScore + 1
        };
        if (this.state.playerScore == 2) {
          this.bestOfThreeGame();
        }
        break;
      case "Computer wins!":
        score = {
          state: "botScore",
          value: this.state.botScore + 1
        };
        if (this.state.botScore == 2) this.bestOfThreeGame();
        break;
    }
    this.setState({
      [score.state]: score.value
    });
  };

  bestOfThreeGame = result => {
    let gameScore;
    switch (result) {
      case this.state.playerScore == 2:
        gameScore = {
          state: this.Initialstate.playerScore,
          value: this.state.gameScorePlayer + 1
        };
        this.state.playerScore = 0;
        break;
      case this.state.botScore == 2:
        gameScore = {
          state: this.Initialstate.botScore,
          value: this.state.gameScoreBot + 1
        };
        this.state.botScore = 0;
    }
    this.setState({
      [gameScore.state]: gameScore.value
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
        <h1 id="bestofthree-header">
          Play to score for best out of three games!
        </h1>
        <h4>Choose your weapon</h4>

        <button
          onClick={event => this.handleMove(event)}
          value="rock"
          id="rock"
          className="movebutton"
        >
          Rock
        </button>
        <button
          onClick={event => this.handleMove(event)}
          value="paper"
          id="paper"
          className="movebutton"
        >
          Paper
        </button>
        <button
          onClick={event => this.handleMove(event)}
          value="scissors"
          id="scissors"
          className="movebutton"
        >
          Scissors
        </button>
        {this.state.result && (
          <>
            <h5 id="playermove">You chose: {this.state.playerChoice}</h5>
            <h5 id="playermove">Computer chose: {this.state.botChoice}</h5>
            <h4>Player Score: {this.state.playerScore}</h4>
            <h4>Computer Score: {this.state.botScore}</h4>
            <h2>{this.state.result}</h2>
            <h3 id="gamescore-player">
              Player total gamescore: {this.state.gameScorePlayer}
            </h3>
            <h3 id="gamescore-bot">
              Computer total gamescore: {this.state.gameScoreBot}
            </h3>
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

export default BestOfThree;
