import React, { Component } from "react";
import { botMove } from './gameLogic';

class SimpleGame extends Component {

render() {
  return(
    <>
    <button onClick={event => this.handleMove(event)} value='rock'>Rock</button>
    <button value='paper'>Paper</button>
    <button value='scissors'>Scissors</button>
    <>
    <h3>Computer chose: {botMove()}</h3>
    </>
    </>
  )
}
}

export default SimpleGame;
