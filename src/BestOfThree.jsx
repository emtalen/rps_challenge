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
        <h1 id="bestofthree-header">Play to score for best out of three games!</h1>

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
            <div>
              <h5>Player Score: {this.state.playerScore}</h5>
            </div>
            <h3 className="moves">Computer chose: {this.state.botChoice}</h3>
            <div>
              <h5>Computer Score: {this.state.botScore}</h5>
            </div>
            <h2>{this.state.result}</h2>
            <div>
              <div>
                <h4>Player total gamescore: {this.state.gameScorePlayer}</h4>
              </div>
              <div>
                <h4>Computer total gamescore: {this.state.gameScoreBot}</h4>
              </div>
            </div>
          </>
        )}
        <a class="ui button" id='go-back-tab' onClick={event =>  window.location.href='/'}>Go back</a>
      </>
    );
  }
}

export default BestOfThree;
