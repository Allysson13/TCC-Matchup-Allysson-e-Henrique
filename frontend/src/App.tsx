import React from 'react';
import './App.css';
import AppIndex from './pages/AppIndex/AppIndex';
/*
/!*import { BrowserRouter as Router, Route, Switch } f*!/rom 'react-router-dom';import {Sign} from "crypto";
*/
import SignIn from "./pages/signin/SignIn";

const App: React.FC = () => {
    return (
        <div className="App">

            <SignIn></SignIn>
        </div>
        /*<Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/signin">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/" exact component={AppIndex}/>
                    <Route path="/signin" component={SignIn}/>
                </Switch>
            </div>
        </Router>*/
    );
}


export default App;
