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
import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";
import {User} from "./model/user";
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

export const ROUTE_INDEX= '/';
export const ROUTE_HOME = '/home';
export const ROUTE_SIGN_IN = '/login';
export const ROUTE_SIGN_UP = '/cadastro';
export const ROUTE_PROFILE = '/perfil';

export const LOGGED_USER = (userData: User) => {

}


const router = createBrowserRouter(
    createRoutesFromElements(

            <Route>
                <Route path={ROUTE_INDEX} index element={<AppIndex />} />
                <Route path={ROUTE_SIGN_IN} element={<SignIn />} />
                <Route path={ROUTE_SIGN_UP} element={<SignUp />} />
                <Route path={ROUTE_HOME} element={<Home />} />
                {/*<Route path={ROUTE_PROFILE} element={<Profile />} />*/}
            </Route>



    )
)

const App: React.FC = () => {
    return (
        <RouterProvider router={router} />
    );
}


export default App;
