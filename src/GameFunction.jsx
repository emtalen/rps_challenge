import React from 'react'

const GameFunction = ({playerMove}) => {
  const computerMove = getComputerMove()
  return (
    <div id='resultelement'>
      <p>You chose {playerMove} and the computer chose {computerMove}</p>
      </div>
  )
}

export default GameFunction