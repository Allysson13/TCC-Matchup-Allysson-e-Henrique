import * as React from 'react';
import {createTheme, ThemeProvider} from '@mui/material/styles';

import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
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
import theme from "../../theme";
import {hexToRgb} from "@mui/material";
import {grey} from "@mui/material/colors";


const AppIndex: React.FC = () => {
    const [darkMode, setDarkMode] = useState(true);
    theme.palette.mode = darkMode ? 'dark' : 'light';
    /*if (!darkMode) {
        theme.palette = {
            mode: 'light',
            primary: {
                main: hexToRgb('#880ED4'),
                dark: hexToRgb('#5f0994'),
                light: hexToRgb('#9f3edc'),
                contrastText: hexToRgb('#51087E'),
            },
            secondary: {
                main: hexToRgb('#00b0ff'),
                dark: hexToRgb('#007bb2'),
                light: hexToRgb('#33bfff'),
                contrastText: hexToRgb('#51087E'),
            },
            text: {
                primary: hexToRgb('#ffffff'),
                secondary: hexToRgb('#000000'),
                disabled: hexToRgb('#000000'),
            },
            //divider: hexToRgb('#00b0ff'),
            background: {
                default: grey[900],
                paper: grey[900],
            },
        }
    }*/
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