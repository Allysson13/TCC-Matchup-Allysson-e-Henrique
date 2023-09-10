import * as React from 'react';
import {Theme} from '@mui/material/styles';
import {SxProps} from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import {Button, Grow, Typography, useScrollTrigger} from "@mui/material";
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';

const item: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: 5,
};

const number = {
    fontSize: 24,
    fontFamily: 'default',
    color: 'secondary.main',
    fontWeight: 'medium',
};

const image = {
    height: 55,
    my: 4,
};

const WhatIsMatchup = () => {

    function isScrolled() {
        return window.scrollY > 3; // Defina o limite desejado
    }

    // Use o hook useScrollTrigger para detectar a rolagem
    const scrolled = useScrollTrigger({
        disableHysteresis: true, // O gatilho é ativado imediatamente quando você rola para cima
        threshold: 0, // Defina o limite de deslocamento
    });

    return (
        <Box
            component="section"
            sx={{display: 'flex', bgcolor: 'black', overflow: 'hidden'}}
        >
            <Container
                sx={{
                    mt: 10,
                    mb: 15,
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Box
                    component="img"
                    src="/static/themes/onepirate/productCurvyLines.png"
                    alt="curvy lines"
                    sx={{
                        pointerEvents: 'none',
                        position: 'absolute',
                        top: -180,
                        opacity: 0.7,
                    }}
                />
                <Typography variant="h4" component="h2" sx={{mb: 14}}> {/*marked="center"*/}
                    O que é o Matchup?
                </Typography>
                <div>
                    <Grid container spacing={5} sx={{marginBottom: '100px'}}>
                        <Grow in={isScrolled()}>
                            <Grid item xs={12} md={4}>
                                <Box sx={item}>
                                    <Box sx={number}>1.</Box>
                                    <SportsEsportsOutlinedIcon
                                        sx={{width: '80px', height: '80px', marginTop: '15px', marginBottom: '15px'}}/>
                                    <Typography variant="h5" align="center">
                                        Selecione seus jogos favoritos e converse sobre eles com seus amigos!
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grow>
                        <Grow in={isScrolled()}
                              style={{transformOrigin: '0 0 0'}}
                              {...(isScrolled() ? {timeout: 1000} : {})}
                        >
                            <Grid item xs={12} md={4}>
                                <Box sx={item}>
                                    <Box sx={number}>2.</Box>

                                    <GroupAddOutlinedIcon
                                        sx={{width: '80px', height: '80px', marginTop: '15px', marginBottom: '15px'}}/>

                                    <Typography variant="h5" align="center">
                                        Encontre pessoas com gostos em comum para conversar pela plataforma!
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grow>
                        <Grow in={isScrolled()}
                              style={{transformOrigin: '0 0 0'}}
                              {...(isScrolled() ? {timeout: 2000} : {})}
                        >
                            <Grid item xs={12} md={4}>
                                <Box sx={item}>
                                    <Box sx={number}>3.</Box>

                                    <SportsEsportsOutlinedIcon
                                        sx={{width: '80px', height: '80px', marginTop: '15px', marginBottom: '15px'}}/>
                                    <Typography variant="h5" align="center">
                                        Descubra novos jogos recomendados com base nos seus interesses!
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grow>
                    </Grid>
                </div>
                {/*<Button
          color="secondary"
          size="large"
          variant="contained"
          component="a"
          href="/premium-themes/onepirate/sign-up/"
          sx={{ mt: 8 }}
        >
          Get started
        </Button>*/}
            </Container>
        </Box>
    )
        ;
}

export default WhatIsMatchup
;
