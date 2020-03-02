import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';
import BestOfThree from './BestOfThree';
import SimpleGame from './SimpleGame';
import { Switch, Route, BrowserRouter } from 'react-router-dom';


const App = () => {
    return ( 
        <div>
            <Switch>
                <Route exact path='/' component={Welcome}></Route>
                <Route exact path='/simplegame' component={SimpleGame}></Route>
                <Route exact path='/bestofthree' component={BestOfThree}></Route>
            </Switch>
        </div>
    )
}
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));