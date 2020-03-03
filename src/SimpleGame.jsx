import React, { Component } from "react";
import { botMove } from './gameLogic';

class SimpleGame extends Component {
  state = {
  }

render() {
  return(
    <>
    <button onClick={event => this.handleMove(event)} value='rock'>Rock</button>
    <button onClick={event => this.handleMove(event)} value='paper'>Paper</button>
    <button onClick={event => this.handleMove(event)} value='scissors'>Scissors</button>
    <>
    <h3>Computer chose: {botMove()}</h3>
    </>
    </>
  )
}
}

export default SimpleGame;
