import React from 'react';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from 'react-router-dom'
import './App.css';
import AppIndex from './pages/AppIndex/AppIndex';
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/Signup";
/*
/!*import { BrowserRouter as Router, Route, Switch } f*!/rom 'react-router-dom';import {Sign} from "crypto";
*/

/*const App: React.FC = () => {
    return (
        <div className="App">
            <SignIn></SignIn>
        </div>
        /!*<Router>
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
        </Router>*!/
    );
}*/

const router = createBrowserRouter(
    createRoutesFromElements(

            <Route>
                <Route path="/" index element={<AppIndex />} />
                <Route path="/login" index element={<SignIn />} />
                <Route path="/register" index element={<SignUp />} />
            </Route>



    )
)

const App: React.FC = () => {
    return (
        <RouterProvider router={router} />
    );
}


export default App;
