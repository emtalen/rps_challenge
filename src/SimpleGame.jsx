import React, { Component } from "react";
import { botMove, assessGame, scoreEachWin } from "./gameLogic";

class SimpleGame extends Component {
  state = {
    playerChoice: '',
    botChoice: '',
    showMessage: false,
    results: '',
    playerScore: 0,
    botScore: 0
  };

  handleMove(event) {
    let playerChoice = event.target.value;
    let botChoice = botMove();
    this.setState({
      playerChoice: playerChoice,
      botChoice: botChoice,
      showMessage: true,
      result: assessGame(playerChoice, botChoice),
      score: scoreEachWin()
    });
  }

  render() {
    return (
      <>
      <h1 id='simplegame-header'>Play to score for every win!</h1>
        <button onClick={event => this.handleMove(event)} value='rock' id='rock'>
          Rock
        </button>
        <button onClick={event => this.handleMove(event)} value='paper' id='paper'>
          Paper
        </button>
        <button onClick={event => this.handleMove(event)} value='scissors' id='scissors'>
          Scissors
        </button>
        {this.state.showMessage && (
          <>
            <h3 className='moves'>You chose: {this.state.playerChoice}</h3>
            <h3 className='moves'>Computer chose: {this.state.botChoice}</h3>
            <h2>{this.state.result}</h2>
            <div>
              {this.state.playerScore}
              {this.state.botScore}
            </div>
          </>
        )}
      </>
    );
  }
}

export default SimpleGame;
