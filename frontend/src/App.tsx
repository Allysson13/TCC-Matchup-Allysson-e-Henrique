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
