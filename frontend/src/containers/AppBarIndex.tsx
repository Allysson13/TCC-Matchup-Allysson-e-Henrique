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


const AppBarIndex = () => {
    const history = useNavigate();
    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{
                border: (theme) => `1px solid ${theme.palette.divider}`,
                borderRadius: '50px',
                marginTop: '15px',
            }}

        >
            <Box

            >
                <Toolbar sx={{flexWrap: 'wrap'}}>
                    <Grid container spacing={3}>
                        <Grid item xs={6} textAlign="center" alignItems='center' margin="auto" xs>
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
            </Box>
        </AppBar>
    )

}

export default AppBarIndex;
