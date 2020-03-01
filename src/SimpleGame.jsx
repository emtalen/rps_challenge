import React, { Component } from 'react';
import PlayerMove from './PlayerMove';
import BotMove from './BotMove'
import Score from './Score';
import Result from './Result';

class SimpleGame extends Component {
  state = {
    botMove: '',
    playerMove: '',
    result: '',
    winner: '', 
    visible: false,
    score: {
        playerScore: 0,
        botScore: 0
    }
  };

  compare (move1) {
    let move2 = Math.floor(Math.random() * 3) +1
    let newScore = Object.assign({},
      this.state.score);
      if (move2 >= 0 && move2 <= 1) { move2 = 'Rock' }
      else if (move2 >= 1 && move2 <= 2) { move2 = 'Paper' }
      else move2 = 'Scissors';

      this.setState({
          playerMove: move1,
          botMove: move2
      });

      if (move1 === move2) {
        this.setState({
          result: 'Tie',
          winner: ''
        });
      } else {
        if (move1 === 'Rock') {
          if (move2 === 'Scissors') {
            newScore.playerScore = this.state.score.playerScore + 1;
            newScore.botScore = this.state.score.botScore;
            this.setState({
              result: 'You win!',
              winner: 'Player!',
              score: newScore,
              visible: true
            });
          } else { 
            newScore.playerScore = this.state.score.playerScore;
            newScore.botScore = this.state.score.botScore + 1;
            this.setState({
              result: 'The Bot wins!',
              winner: 'The Bot',
              score: newScore,
              visible: true
            });
          };
        };

        if (move1 === 'Scissors') {
          if (move2 === 'Paper') {
            newScore.playerScore = this.state.score.playerScore +1;
            newScore.botScore = this.state.score.botScore;
            this.setState({
              result: 'You win!',
              winner: 'Player',
              score: newScore,
              visible: true
            });
          } else { 
            newScore.playerScore = this.state.score.playerScore;
            newScore.botScore = this.state.score.botMove + 1;
            this.setState({
              result: 'The Bot wins!',
              winner: 'The Bot',
              score: newScore,
              visible: true
            });
          };
        };

        if (move1 === 'Paper') {
          if (move2 === 'Rock') {
            newScore.playerScore = this.state.score.playerScore + 1;
            newScore.botScore = this.state.score.botScore;
            this.setState({
              result: 'You win!',
              winner: 'Player',
              score: newScore,
              visible: true
              });
          } else {
            newScore.playerScore = this.state.score.playerScore;
            newScore.botScore = this.state.score.botScore + 1;
            this.setState({
              result: 'The Bot wins!',
              winner: 'The Bot',
              score: newScore,
              visible: true
            });
          };
        }
      };
    }
    render() {
      let showBot;
      let showResults;
      if (this.state.visible === true) {
        showBot = ( <BotMove botMove={this.state.botMove} /> );
        showResults = ( <Result result={this.state.result} winner={this.state.winner} /> );
      } else {
        showBot = <div></div>
        showResults = <div></div>
      }
      return (
        <div>
          <PlayerMove compare={this.compare} />
          {showBot}
          {showResults}
          <Score gameScore={this.state.score} />
        </div>
      )
    };
  };

export default SimpleGame;