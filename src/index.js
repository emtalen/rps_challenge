import React from 'react';
import ReactDOM from 'react-dom';
import SimpleGame from './SimpleGame';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Welcome from './App';
import './style.css';


const App = () => {
    return ( 
        <div>
            <Switch>
                <Route exact path='/' component={Welcome}></Route>
                <Route exact path='/simplegame' component={SimpleGame}></Route>
            </Switch>
        </div>
    )
}
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));