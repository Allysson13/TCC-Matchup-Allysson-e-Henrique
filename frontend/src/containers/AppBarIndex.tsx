/*
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import {Avatar, Box, Grid, MenuItem, Stack} from "@mui/material";
import theme from "../theme";
import {useNavigate} from "react-router-dom";
import {ROUTE_SIGN_IN, ROUTE_SIGN_UP} from "../App";
import {useEffect, useState} from "react";

/!*const useStyles = makeStyles(() => ({
    appBar: {
        //transition: 'background-color 0.3s ease',
        borderRadius: '50px',
        marginTop: '10px',
    },
    appBarScrolled: {
        marginTop: '0px',
        radius: '0px',
        //transition: 'background-color 0.3s ease',
    },
}));

const AppBarIndex = () => {
    const history = useNavigate();
    const classes = useStyles();
    const [scrolled, setScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);*!/

import { styled } from '@mui/system';

import { Theme as MuiTheme } from '@mui/material/styles';

declare module '@emotion/react' {
    export interface Theme extends MuiTheme {}
}

/!*
const AppBarIndex = () => {
    const history = useNavigate();
    const [scrolled, setScrolled] = useState<boolean>(false);

    const AppBar = styled('div')(({ scrolled }) => ({
        borderRadius: scrolled ? '0px' : '50px',
        marginTop: scrolled ? '0px' : '10px',
        //transition: 'background-color 0.3s ease',
    }));

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        // Adicione um ouvinte de rolagem à janela
        window.addEventListener('scroll', handleScroll);

        // Remova o ouvinte de rolagem ao desmontar o componente
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <AppBar
position="fixed"
            color="default"
            elevation={0}
            sx={{
                border: (theme) => `1px solid ${theme.palette.divider}`,
            }}

        >
            <Toolbar sx={{flexWrap: 'wrap'}}>
                <Grid container spacing={3}>
                    <Grid item xs={6} textAlign="center" alignItems='center' margin="auto" xs>
                        {/!*<Typography variant="h6" color="inherit" sx={{flexGrow: 1}}>
                                MATCHUP
                            </Typography>*!/}
                        <Grid container spacing={1}>
                            <Grid item textAlign="center" alignItems='center' margin="auto" xs>
                                <Avatar
                                    src="https://img.freepik.com/vetores-gratis/jogo-joystick-tecnologia-esportiva_138676-2045.jpg?t=st=1694285891~exp=1694286491~hmac=58c3de4e27ef8663655dd5ad479b6b914393fb14cd481d12ca7d2feb140d09b3"/>
                            </Grid>
                            <Grid item textAlign="left" alignItems='left' margin="auto" xs>
                                <Typography variant="h6" color="inherit">
                                    MATCHUP
                                </Typography>
                            </Grid>
                        </Grid>

                        {/!*<Image
                                src="https://img.freepik.com/vetores-gratis/jogo-joystick-tecnologia-esportiva_138676-2045.jpg?t=st=1694285891~exp=1694286491~hmac=58c3de4e27ef8663655dd5ad479b6b914393fb14cd481d12ca7d2feb140d09b3"
                                alt="MATCHUP"/>*!/}
                    </Grid>
                    <Grid item xs={6} textAlign="center" margin="auto" sx={{fontSize: '20px'}}>
                        <nav>
                            <Link
                                variant="button"
                                color={theme.palette.primary.main}
                                href="#"
                                sx={{my: 1, mx: 1.5}}
                            >
                                Funcionalidades
                            </Link>
                            <Link
                                variant="button"
                                color={theme.palette.primary.main}
                                href="#"
                                sx={{my: 1, mx: 1.5}}
                            >
                                Empresa
                            </Link>

                            <Link
                                variant="button"
                                color={theme.palette.primary.main}
                                //color="primary"
                                href="#"
                                sx={{my: 1, mx: 1.5}}
                            >
                                Suporte
                            </Link>
                        </nav>
                    </Grid>
                    <Grid item xs textAlign="right">
                        <Button
                            onClick={() => history(ROUTE_SIGN_UP)}
                            variant="outlined"
                            sx={{my: 1, mx: 1.5}}
                            color="primary"
                        >
                            Cadastro
                        </Button>
                        <Button
                            onClick={() => history(ROUTE_SIGN_IN)}
                            variant="contained"
                            sx={{my: 1, mx: 1.5}}
                            color="primary"
                        >
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
};


export default AppBarIndex;
*!/



const AppBarIndex = () => {
    const history = useNavigate();
    const [scrolled, setScrolled] = useState<boolean>(false);

    const StyledAppBar = styled(AppBarIndex)((theme) => ({
        borderRadius: scrolled ? '0px' : '50px',
        marginTop: scrolled ? '0px' : '10px',
        //transition: 'background-color 0.3s ease',
    }));

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <StyledAppBar scrolled={scrolled}>
            <Toolbar sx={{ flexWrap: 'wrap' }}>
                <Grid container spacing={3}>
                    <Grid item xs={6} textAlign="center">
                        <Grid container spacing={1}>
                            <Grid item>
                                <Avatar
                                    src="https://img.freepik.com/vetores-gratis/jogo-joystick-tecnologia-esportiva_138676-2045.jpg?t=st=1694285891~exp=1694286491~hmac=58c3de4e27ef8663655dd5ad479b6b914393fb14cd481d12ca7d2feb140d09b3"
                                    alt="MATCHUP"
                                />
                            </Grid>
                            <Grid item>
                                <Typography variant="h6" color="inherit">
                                    MATCHUP
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} textAlign="center" sx={{ fontSize: '20px' }}>
                        <nav>
                            <Link
                                variant="button"
                                sx={{ my: 1, mx: 1.5, color: (theme) => theme.palette.primary.main }}
                                href="#"
                            >
                                Funcionalidades
                            </Link>
                            <Link
                                variant="button"
                                sx={{ my: 1, mx: 1.5, color: (theme) => theme.palette.primary.main }}
                                href="#"
                            >
                                Empresa
                            </Link>
                            <Link
                                variant="button"
                                sx={{ my: 1, mx: 1.5, color: (theme) => theme.palette.primary.main }}
                                href="#"
                            >
                                Suporte
                            </Link>
                        </nav>
                    </Grid>
                    <Grid item xs textAlign="right">
                        <Button
                            onClick={() => history(ROUTE_SIGN_UP)}
                            variant="outlined"
                            sx={{ my: 1, mx: 1.5 }}
                            color="primary"
                        >
                            Cadastro
                        </Button>
                        <Button
                            onClick={() => history(ROUTE_SIGN_IN)}
                            variant="contained"
                            sx={{ my: 1, mx: 1.5 }}
                            color="primary"
                        >
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </StyledAppBar>
    );
};

export default AppBarIndex;
*/

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import {Avatar, Box, Grid, MenuItem, Stack, useScrollTrigger} from "@mui/material";
import theme from "../theme";
import {useNavigate} from "react-router-dom";
import {ROUTE_SIGN_IN, ROUTE_SIGN_UP} from "../App";


const AppBarIndex = () => {
    const history = useNavigate();

    function isScrolled() {
        return window.scrollY > 0; // Defina o limite desejado
    }

    // Use o hook useScrollTrigger para detectar a rolagem
    const scrolled = useScrollTrigger({
        disableHysteresis: true, // O gatilho é ativado imediatamente quando você rola para cima
        threshold: 0, // Defina o limite de deslocamento
    });

    return (
        <AppBar
            position="fixed"
            color="default"
            elevation={0}
            sx={{
                border: (theme) => `1px solid ${theme.palette.divider}`,
                borderRadius: scrolled || isScrolled() ? '0px' : '50px', // Verifica se o usuário rolou a página
                marginTop: scrolled || isScrolled() ? '0px' : '15px', // Verifica se o usuário rolou a página
                transition: 'border-radius 0.3s ease, margin-top 0.3s ease', // Adiciona transições suaves
            }}
        >
            <Box

            >
                <Toolbar sx={{flexWrap: 'wrap'}}>
                    <Grid container spacing={3}>
                        <Grid item xs textAlign="center" alignItems='center' margin="auto">
                            {/*<Typography variant="h6" color="inherit" sx={{flexGrow: 1}}>
                                MATCHUP
                            </Typography>*/}
                            <Avatar src="https://img.freepik.com/vetores-gratis/jogo-joystick-tecnologia-esportiva_138676-2045.jpg?t=st=1694285891~exp=1694286491~hmac=58c3de4e27ef8663655dd5ad479b6b914393fb14cd481d12ca7d2feb140d09b3">
                            </Avatar>

                            {/*<Image
                                src="https://img.freepik.com/vetores-gratis/jogo-joystick-tecnologia-esportiva_138676-2045.jpg?t=st=1694285891~exp=1694286491~hmac=58c3de4e27ef8663655dd5ad479b6b914393fb14cd481d12ca7d2feb140d09b3"
                                alt="MATCHUP"/>*/}
                        </Grid>
                        <Grid item xs={6} textAlign="center" margin="auto"  sx={{fontSize: '20px'}}>
                            <nav>
                                <Link
                                    variant="button"
                                    color={theme.palette.secondary.main}
                                    href="#"
                                    sx={{my: 1, mx: 1.5}}
                                >
                                    Funcionalidades
                                </Link>
                                <Link
                                    variant="button"
                                    color={theme.palette.secondary.main}
                                    href="#"
                                    sx={{my: 1, mx: 1.5}}
                                >
                                    Empresa
                                </Link>

                                <Link
                                    variant="button"
                                    color={theme.palette.secondary.main}
                                    //color="primary"
                                    href="#"
                                    sx={{my: 1, mx: 1.5}}
                                >
                                    Suporte
                                </Link>
                            </nav>
                        </Grid>
                        <Grid item xs textAlign="right">
                            <Button
                                onClick={() => history(ROUTE_SIGN_UP)}
                                variant="outlined"
                                sx={{my: 1, mx: 1.5}}
                                color="primary"
                            >
                                Cadastro
                            </Button>
                            <Button
                                onClick={() => history(ROUTE_SIGN_IN)}
                                variant="contained"
                                sx={{my: 1, mx: 1.5}}
                                color="primary"
                            >
                                Login
                            </Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </Box>
        </AppBar>
    )

}

export default AppBarIndex;
