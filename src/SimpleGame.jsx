import React, { Component } from "react";
import { botMove } from './gameLogic';

class SimpleGame extends Component {

render() {
  return(
    <>
    <button>Rock</button>
    <button>Paper</button>
    <button>Scissors</button>
    <>
    <h3>Computer chose: {botMove()}</h3>
    </>
    </>
  )
}
}

export default SimpleGame;
