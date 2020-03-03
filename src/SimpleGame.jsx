import React, { Component } from "react";
import { botMove, assessGame } from "./gameLogic";

class SimpleGame extends Component {
  state = {
    playerChoice: "",
    botChoice: "",
    showMessage: false,
    results: ""
  };

  handleClick(event) {
    let playerChoice = event.target.value;
    let botChoice = botMove();
    this.setState({
      playerChoice: playerChoice,
      botChoice: botChoice,
      showMessage: true,
      result: assessGame()
    });
  }

  render() {
    return (
      <>
      <h1>Play to score for every win!</h1>
        <button onClick={event => this.handleMove(event)} value="rock">
          Rock
        </button>
        <button onClick={event => this.handleMove(event)} value="paper">
          Paper
        </button>
        <button onClick={event => this.handleMove(event)} value="scissors">
          Scissors
        </button>
        {this.state.showMessage && (
          <>
            <h3>You chose: {this.state.playerChoice}</h3>
            <h3>Computer chose: {this.state.botChoice}</h3>
            <h2>{this.state.results}</h2>
          </>
        )}
      </>
    );
  }
}

export default SimpleGame;
