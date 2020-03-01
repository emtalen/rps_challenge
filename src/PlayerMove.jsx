import React, { Component } from 'react';

class PlayerMove extends Component {
    compareMethod = (move) => {
        this.props.compare(move);
    }
    render() {
        return (
            <>
            <button class="massive ui button" title='Rock' onClick={() => this.compareMethod('Rock')}>
            <i class="hand rock outline icon"></i>
          </button> 
           <button class="massive ui button" title='Paper' onClick={() => this.compareMethod('Paper')}>
           <i class="hand paper outline icon"></i>
         </button> 
          <button class="massive ui button" title='Scissors' onClick={() => this.compareMethod('Scissors')}>
          <i class="hand scissors outline icon"></i>
        </button> 
        </>
        )
    }
}

export default PlayerMove;
