import React from 'react';

const Welcome = () => {
  return (
    <div>
      <h1 id='title'>Rock, Paper, Scissors!</h1>
        <div class="selectgame">
          <h2 id='subtitle'>How do you want to play?</h2>
          <buton class="massive ui button" id='simplegame-tab' onClick={event =>  window.location.href='/simplegame'}>Scores per win</button>
          {/* <button class="massive ui button" id='bestofthree-tab' onClick={event =>  window.location.href='/bestofthree'}>Best of three</button> */}
        </div>
    </div>
  )
};

export default Welcome;
