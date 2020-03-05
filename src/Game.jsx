import React from 'react';

const Game = () => {
  return (
    <div>
      <h1 id='title'>Rock, Paper, Scissors!</h1>
        <div class="selectgame">
          <h2>How do you want to play?</h2>
          <a class="ui button" id='simplegame-tab' onClick={event =>  window.location.href='/SimpleGame'}>Scores per win</a>
          {/* <a class="ui button" id='bestofthree-tab' onClick={event =>  window.location.href='/BestOfThree'}>Best of three</a> */}
        </div>
    </div>
  )
};

export default Game;
