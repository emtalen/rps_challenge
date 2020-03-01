import React from 'react';
import Result from'./Result';

const Score = ({ gameScore, bowScore, userScore }) => {
    return (
        <div>
        <div id="scores">
            <h5>Scores</h5>
            <h5>Bot: {this.props.gameScore.botScore}</h5>
            <h5>You: {this.props.gameScore.userScore}</h5>
        </div>
        </div>
    )
}

export default Score;