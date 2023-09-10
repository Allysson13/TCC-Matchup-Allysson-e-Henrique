/*
import React from 'react';
import Button from '@mui/material/Button';
import theme from "../../theme";
import {useNavigate} from "react-router-dom";

const AppIndex: React.FC = () => {
    const history = useNavigate();
    return (
        <div>
            <h1>BEM-VINDO(A) AO MATCHUP!</h1>
            <Button
                variant="contained"
                onClick={() => history("/login")}
            >
                LOGIN
            </Button>
        </div>
    );
}

export default AppIndex;*/


import * as React from 'react';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { lightTheme, theme} from "../../theme";
import AppBarIndex from "../../containers/AppBarIndex";
import AppAppBar from "../../components/AppIndex/AppAppBar";
import GameGenres from "../../components/AppIndex/GameGenres";
import WhatIsMatchup from "../../components/AppIndex/WhatIsMatchup";
import GetBeta from "../../components/AppIndex/GetBeta";
import ProductSmokingHero from "../../components/AppIndex/ProductSmokingHero";
import AppFooter from "../../components/AppIndex/AppFooter";
import Introduction from "../../components/AppIndex/Introduction";
import ForWho from "../../components/AppIndex/ForWho";
import {useState} from "react";



const AppIndex: React.FC = () => {
    const [darkMode, setDarkMode] = useState(true);
    theme.palette.mode = darkMode?'dark': 'light';
    //const theme = darkMode? darkTheme: lightTheme;
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles styles={{ul: {margin: 0, padding: 0, listStyle: 'none'}}}/>
            <CssBaseline/>
            <AppBarIndex darkMode={darkMode}
                         onToggleColorModeClick={() => setDarkMode(!darkMode)}></AppBarIndex>
            <Introduction/>
            <WhatIsMatchup/>
            <ForWho/>
            <GameGenres/>
            <GetBeta/>
            <ProductSmokingHero/>
            <AppFooter/>


        </ThemeProvider>
    )

}


export default AppIndex;